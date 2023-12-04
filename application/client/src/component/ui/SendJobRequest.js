import React from 'react'
import SendJobRequestCSS from './SendJobRequest.module.css'

// TODO: refines send job request pop-up style
function SendJobRequest ({ jobTitle, onClose }) {
  return (
    <div className={SendJobRequestCSS.popup}>
      <div className={SendJobRequestCSS.popupContent}>
      <h1>Send a request for</h1>

      <h2 className={SendJobRequestCSS.title}><strong>Title: </strong> {jobTitle}</h2>

      <div className={SendJobRequestCSS.infos}>
        <p>The owner of this job post will receive your profile info whether they
           accept or not your request. Make sure you info are up to date.
        </p>
      </div>

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
