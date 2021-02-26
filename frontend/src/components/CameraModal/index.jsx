import React from 'react';
import { Modal } from 'antd';

import './style.scss';

const CameraModal = (props) => {

  const closeModal = () => {
    props.closeModal();
  }

  return (
    <div className="camera-modal-container">
      <Modal
        footer={null}
        onCancel={closeModal}
        onOk={closeModal}
        visible={props.isModalVisible}
        width="90%"
      >
        <div className="camera-modal">
          Hello World
        </div>
      </Modal>
    </div>
  )
}

export default CameraModal;