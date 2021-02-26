import React, { useRef, useState } from 'react';
import { Modal } from 'antd';
import Webcam from "react-webcam";
import ingredients from '../../assets/ingredients.json';

import './style.scss';

const CameraModal = (props) => {

  const [imageSrc, setImageSrc] = useState('');
  const [message, setMessage] = useState('');
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const closeModal = () => {
    props.closeModal();
  }

  const takePicture = async () => {
    const base64 = webcamRef.current.getScreenshot();
    console.log(base64);
    setImageSrc(base64);

    const payload = {
      requests: [
        {
          image: {
            "content": base64.replace("data:image/webp;base64,", "")
          },
          features: [
            {
              "maxResults": 5,
              "type": "OBJECT_LOCALIZATION"
            },
          ]
        }
      ]
    }
   
    const response = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${process.env.REACT_APP_KEY}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Content-Length": base64.replace("data:image/webp;base64,", "").length
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    if (!data) throw new Error('Empty response from server');
    if (data.error) throw new Error(data.error.message);
    if (data.responses && data.responses[0] && data.responses[0].localizedObjectAnnotations) {
      let annotation = null;
      for (let i = 0; i < data.responses[0].localizedObjectAnnotations.length; i++) {
        annotation = data.responses[0].localizedObjectAnnotations[i];
        if (annotation.name !== "Person" && annotation.name !== "Lighting" && annotation.name !== "Clothing" &&  annotation.name !== "Mobile phone" && annotation.name.toLowerCase() in ingredients) {
          break;
        }
      }
      if (annotation.name !== "Person" && annotation.name !== "Lighting" && annotation.name !== "Clothing" && annotation.name !== "Mobile phone" && annotation.name.toLowerCase() in ingredients) {
        console.log(data.responses);
        console.log(annotation.name);
        drawCanvas(annotation.boundingPoly.normalizedVertices);
        setMessage(annotation.name + ' scanned');
      }
      else {
        setMessage('Nothing found :(');
        setTimeout(() => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          setImageSrc('');
          setMessage('');
        }, 2000);
      }
    }
  }

  const drawCanvas = (bounds) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let maxX = 0;
    let maxY = 0;
    let minX = 1300;
    let minY = 1300;
    for (let i = 0; i < bounds.length; i++) {
      const corner = bounds[i];
      const cornerX = corner.x || 0;
      const cornerY = corner.y || 0;
      maxX = Math.max(maxX, cornerX);
      maxY = Math.max(maxY, cornerY);
      minX = Math.min(minX, cornerX);
      minY = Math.min(minY, cornerY);
    }
    const x = minX * canvas.width;
    const width = (maxX - minX) * canvas.width;
    const y = (minY) * canvas.height;
    const height = (maxY - minY) * canvas.height;
    ctx.beginPath();
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop("0", "#A643F4");
    gradient.addColorStop("1", "#F959A6");
    ctx.lineWidth = "6";
    ctx.strokeStyle = gradient;
    ctx.rect(x, y, width, height);
    ctx.stroke();

    setTimeout(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setImageSrc('');
      setMessage('');
    }, 2000);
  }


  return (
    <div className="camera-modal-container">
      <Modal
        closable={false}
        footer={null}
        onCancel={closeModal}
        onOk={closeModal}
        visible={props.isModalVisible}
        width="100%"
      >
        <div className="camera-modal">
          <h1>Scan Items</h1>
          <Webcam
              ref={webcamRef}
              className="camera"
              screenshotQuality={1}
              height={720}
              width={1624}
            />
          { imageSrc !== '' && 
            <img alt="screeenshot" className="screenshot" src={imageSrc}></img>
          }
          {message !== '' &&
            <div className="message">{message}</div>
          }
          <canvas ref={canvasRef} height={720} width={1624}/>
          <button
            id="scan"
            onClick={takePicture}
          >
            Scan
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default CameraModal;