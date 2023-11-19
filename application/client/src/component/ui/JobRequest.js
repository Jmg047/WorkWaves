import React from 'react'
import JobRequestCSS from './JobRequest.module.css'

function JobRequest ({ onClose }) {
  const handleSendRequest = () => {
    onClose()
  }

  return (
    <div className={JobRequestCSS.popup}>
      <div className={JobRequestCSS.popup}>
        <span className={FeedCSS.close} onClick={onClose}>&times;</span>
        <h2>Job Request Form</h2>
        <p className={JobRequestCSS.RequestItem}><strong>Where:</strong> {JobRequest.where}</p>
        <p className={JobRequestCSS.RequestItem}><strong>When:</strong> {JobRequest.when}</p>
        <p className={JobRequestCSS.RequestItem}><strong>Payment:</strong> {JobRequest.payment}</p>
        <button onClick={handleSendRequest}>Send Request</button>
      </div>
    </div>
  )
}

export default JobRequest


// {/* <div className={JobDetailsCSS.popup}>
// <div className={JobDetailsCSS.popupContent}>
//   <div className={JobDetailsCSS.photoSection}>
//     {jobDetails.photo && (
//       <img src={jobDetails.photo} alt={jobDetails.title} className={JobDetailsCSS.jobPhoto} />
//     )}
//   </div>
//   <h2 className={JobDetailsCSS.title}><strong>Title: </strong>{jobDetails.title}</h2>
//   <p className={JobDetailsCSS.detailsItem}><strong>Where:</strong> {jobDetails.where}</p>
//   <p className={JobDetailsCSS.detailsItem}><strong>When:</strong> {jobDetails.when}</p>
//   <p className={JobDetailsCSS.detailsItem}><strong>Payment:</strong> {jobDetails.payment}</p>
//   <div className={JobDetailsCSS.infoSection}>
//     <p className={JobDetailsCSS.description}>{jobDetails.description}</p>
//   </div>
//   <div className={JobDetailsCSS.buttonContainer}>
//     <button /* </div>onClick={fill it in} */ className={JobDetailsCSS.previewButton}>Preview</button>
//     <button /* </div>onClick={fill it in} */ className={JobDetailsCSS.addButton}>Add Job</button>
//   </div>
//   <button onClick={onClose} className={JobDetailsCSS.closeButton}>Close</button>
// </div>
// </div> */}