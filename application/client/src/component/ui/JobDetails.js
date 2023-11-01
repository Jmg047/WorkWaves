import React from 'react';
import JobDetailsCSS from './JobDetails.module.css'; // Import the CSS file

function JobDetails({ jobDetails, onClose }) {
  return (
    <div className={JobDetailsCSS.popup}> {/* Apply the 'popup' class */}
      <div className={JobDetailsCSS.popupContent}> {/* Apply the 'popupContent' class */}
        <h2 className={JobDetailsCSS.title}>Job Details</h2> {/* Apply the 'title' class */}
        <p className={JobDetailsCSS.description}>{jobDetails.description}</p> {/* Apply the 'description' class */}
        <button onClick={onClose} className={JobDetailsCSS.closeButton}>Close</button> {/* Apply the 'closeButton' class */}
      </div>
    </div>
  );
}

export default JobDetails;
