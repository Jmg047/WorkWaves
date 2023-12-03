import React from 'react'
import SendJobRequestCSS from './SendJobRequest.module.css'

function SendJobRequest ({  onClose }) {

  return (
    <div className={SendJobRequestCSS.popup}>
      <div className={SendJobRequestCSS.popupContent}>
      <p>Send job request here</p>
        <button 
          onClick={onClose} 
          className={SendJobRequestCSS.closeButton}>
          Close
          </button>
      </div>
    </div>
  )
}

export default SendJobRequest
