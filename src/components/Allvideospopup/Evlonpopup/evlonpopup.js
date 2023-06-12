import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#___gatsby');

const EvlonPopUp = ({ isOpen, onClose, videoSrc }) => {
  const secureVideoSrc = videoSrc.replace('http://', 'https://');
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Popup"
    >
      <div className="video-popup">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <iframe
          src={secureVideoSrc}
          width="100%"
          height="100%"
          
          allow="autoplay; encrypted-media"
          allowFullScreen
          autoPlay
        ></iframe>
      </div>
    </Modal>
  );
};


export default EvlonPopUp;
