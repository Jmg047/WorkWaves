import React from 'react'
import AddJobCSS from './AddJob.module.css'

function AddJob ({ addJob, onClose }) {
  console.log('AddJob props:', addJob, onClose)
  // check if addJob is null or undefined
  if (!addJob) {
    return null // or display an error message
  }

  // event handler for the "Add Job" button
  const handleAddJob = () => {
    console.log('Add Job button clicked!')
    //  logic for adding the job
    //  handle the action of adding the job
    //  call an API
  }

  return (
    <div className={AddJobCSS.popup}>
      <div className={AddJobCSS.popupContent}>
        <div className={AddJobCSS.photoSection}>
          {addJob.photo && (
            <img src={addJob.photo} alt={addJob.title} className={AddJobCSS.jobPhoto} />
          )}
        </div>
        <h2 className={AddJobCSS.title}><strong>Title: </strong>{addJob.title}</h2>
        <p className={AddJobCSS.detailsItem}><strong>Where:</strong> {addJob.where}</p>
        <p className={AddJobCSS.detailsItem}><strong>When:</strong> {addJob.when}</p>
        <p className={AddJobCSS.detailsItem}><strong>Payment:</strong> {addJob.payment}</p>
        <div className={AddJobCSS.infoSection}>
          <p className={AddJobCSS.description}>{addJob.description}</p>
        </div>
        <div className={AddJobCSS.buttonContainer}>
          <button onClick={handleAddJob} className={AddJobCSS.addButton}>Add Job</button>
        </div>
        <button onClick={onClose} className={AddJobCSS.closeButton}>Close</button>
      </div>
    </div>
  )
}

export default AddJob
