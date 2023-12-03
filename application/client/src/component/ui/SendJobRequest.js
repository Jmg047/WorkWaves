import React from 'react'
import SendJobRequestCSS from './SendJobRequest.module.css'

function SendJobRequest ({ jobDetails, onClose }) {
  // check if jobDetails is null or undefined
  if (!jobDetails) {
    console.log('Job details is null or undefined')
    return null
  }

  console.log('Rendering modal with job details:', jobDetails)

  return (
    <div className={SendJobRequestCSS.popup}>
      <div className={SendJobRequestCSS.popupContent}>
        <div className={SendJobRequestCSS.photoSection}>
          {jobDetails.photo && (
            <img src={jobDetails.photo} alt={jobDetails.title} className={SendJobRequestCSS.jobPhoto} />
          )}
        </div>
        <h2 className={SendJobRequestCSS.title}><strong>Title: </strong>{jobDetails.title}</h2>
        <p className={SendJobRequestCSS.detailsItem}><strong>Where:</strong> {jobDetails.location}</p>
        <p className={SendJobRequestCSS.detailsItem}><strong>When:</strong> {jobDetails.when}</p>
        <p className={SendJobRequestCSS.detailsItem}><strong>Payment:</strong> {jobDetails.payment}</p>
        <div className={SendJobRequestCSS.infoSection}>
          <p className={SendJobRequestCSS.description}>{jobDetails.description}</p>
        </div>
        <div className={SendJobRequestCSS.buttonContainer}>
          <button className={SendJobRequestCSS.addButton}>Add Job</button>
        </div>
        <button onClick={onClose} className={SendJobRequestCSS.closeButton}>Close</button>
      </div>
    </div>
  )
}

export default SendJobRequest
