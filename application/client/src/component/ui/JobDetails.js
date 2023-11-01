import React from 'react'
import JobDetailsCSS from './JobDetails.module.css'

function JobDetails ({ jobDetails, onClose }) {
  return (
    <div className={JobDetailsCSS.popup}>
      <div className={JobDetailsCSS.popupContent}>
        <h2 className={JobDetailsCSS.title}>Job Details</h2>
        <p className={JobDetailsCSS.description}>{jobDetails.description}</p>
        <button onClick={onClose} className={JobDetailsCSS.closeButton}>Close</button>
      </div>
    </div>
  )
}

export default JobDetails
