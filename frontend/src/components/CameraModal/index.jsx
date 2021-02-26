import React, { useRef, useState } from 'react';
import { Modal } from 'antd';
import Webcam from "react-webcam";

import './style.scss';

const CameraModal = (props) => {

  const [imageSrc, setImageSrc] = useState('');
  const webcamRef = useRef(null);

  const closeModal = () => {
    props.closeModal();
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
          <h1>Item</h1>
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
          <button
            id="scan"
            onClick={() => {
              const base64 = webcamRef.current.getScreenshot();
              console.log(base64);
              setImageSrc(base64);
            }}
          >
            Scan
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default CameraModal;