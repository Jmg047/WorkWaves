import React from 'react'
import SendJobRequestCSS from './SendJobRequest.module.css'

function SendJobRequest ({ onClose }) {
  return (
    <div className={SendJobRequestCSS.popup}>
      <div className={SendJobRequestCSS.popupContent}>
      <h2>Send a request for</h2>

      <h2 className={SendJobRequestCSS.title}><strong>Title: </strong></h2>

      <p>The owner of this job post will receive your profile info whether they
        accept or not your request. make sure you info are up to date.
      </p>

          <button
          className={SendJobRequestCSS.closeButton}>
          Check my profile
          </button>

          <button
          className={SendJobRequestCSS.closeButton}>
          Send a request
          </button>

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
