import React from 'react';
import SendJobRequestCSS from './SendJobRequest.module.css';

function SendJobRequest({ jobTitle, onClose }) {
  return (
    <div className={SendJobRequestCSS.popupSendJobRequest}>
      <div className={SendJobRequestCSS.popupContentSendJobRequest}>
        <h1 className={SendJobRequestCSS.sendJobRequest}>Send a request for</h1>

        <h2 className={SendJobRequestCSS.titleSendJobRequest}><strong>Title: </strong>{jobTitle}</h2>

        <div className={SendJobRequestCSS.infosSendJobRequest}>
          <p className={SendJobRequestCSS.sendJobRequest}>
            The owner of this job post will receive your profile info whether they accept or not your request.
            Make sure your info is up to date.
          </p>
        </div>

        <div className={SendJobRequestCSS.buttonContainerSendJobRequest}>
          <button className={SendJobRequestCSS.sendJobRequest}>Check my profile</button>
          <button className={SendJobRequestCSS.sendJobRequest}>Send a request</button>
        </div>

        <button onClick={onClose} className={SendJobRequestCSS.closeButtonSendJobRequest}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SendJobRequest;
