import React from 'react'
import JobRequest from './JobRequest.module.css'

function jobRequest ({ onClose }) {
  const handleSendRequest = () => {
    // Add logic to handle sending the job request
    // You can include form data and any necessary API calls here
    // For simplicity, we're just closing the modal in this example
    onClose()
  }

  return (
    <div className={FeedCSS.modal}>
      <div className={FeedCSS.modalContent}>
        <span className={FeedCSS.close} onClick={onClose}>&times;</span>
        <h2>Job Request Form</h2>
        {/* Add your job request form content here */}
        <button onClick={handleSendRequest}>Send Request</button>
      </div>
    </div>
  )
}

export default JobRequest
