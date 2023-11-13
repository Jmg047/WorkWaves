import React from 'react';
import JobDetailsCSS from './JobDetails.module.css';

function JobDetails({ jobDetails, onClose }) {
  // Check if jobDetails is null or undefined
  if (!jobDetails) {
    return null; // or display an error message
  }

  return (
    <div className={JobDetailsCSS.popup}>
      <div className={JobDetailsCSS.popupContent}>
        <div className={JobDetailsCSS.photoSection}>
          {jobDetails.photo && (
            <img src={jobDetails.photo} alt={jobDetails.title} className={JobDetailsCSS.jobPhoto} />
          )}
        </div>
        <h2 className={JobDetailsCSS.title}><strong>Title: </strong>{jobDetails.title}</h2>
        <p className={JobDetailsCSS.detailsItem}><strong>Where:</strong> {jobDetails.where}</p>
        <p className={JobDetailsCSS.detailsItem}><strong>When:</strong> {jobDetails.when}</p>
        <p className={JobDetailsCSS.detailsItem}><strong>Payment:</strong> {jobDetails.payment}</p>
        <div className={JobDetailsCSS.infoSection}>
          <p className={JobDetailsCSS.description}>{jobDetails.description}</p>
        </div>
        <div className={JobDetailsCSS.buttonContainer}>
          <button /*</div>onClick={fill it in}*/ className={JobDetailsCSS.previewButton}>Preview</button>
          <button /*</div>onClick={fill it in}*/ className={JobDetailsCSS.addButton}>Add Job</button>
        </div>
        <button onClick={onClose} className={JobDetailsCSS.closeButton}>Close</button>
      </div>
    </div>
  );
}

export default JobDetails;