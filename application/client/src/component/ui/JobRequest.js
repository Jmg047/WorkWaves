import React from 'react'
import JobRequestCSS from './JobRequest.module.css'

function JobRequest ({ jobRequestData, onClose }) {
  const { where, when, payment } = jobRequestData

  const handleSendRequest = () => {
    // Handle sending the request logic here
    onClose()
  }


  //popup looks like the details one just fill in data in the return
  return (
    <div className={JobRequestCSS.popup}>
      <div className={JobRequestCSS.popupContent}>
        <span className={JobRequestCSS.closeButton} onClick={onClose}>&times;</span>
        <h2>Job Request Form</h2>
        <div className={JobRequestCSS.infoSection}>
          <p className={JobRequestCSS.detailsItem}><strong>Where:</strong> {where}</p>
          <p className={JobRequestCSS.detailsItem}><strong>When:</strong> {when}</p>
          <p className={JobRequestCSS.detailsItem}><strong>Payment:</strong> {payment}</p>
        </div>
        <div className={JobRequestCSS.buttonContainer}>
          <button onClick={handleSendRequest}>Send Request</button>
        </div>
      </div>
    </div>
  )
}

export default JobRequest
