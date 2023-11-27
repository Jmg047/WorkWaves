import React, { useState } from 'react'
import AddJobCSS from './AddJob.module.css'

// TODO: Remove displayedJobTitles and replace with jobTitles corresponding to the employer
// TODO: modify to the user to input the job information

function AddJob ({ onClose }) {
  const [jobData, setJobData] = useState({
    title: '',
    where: '',
    when: '',
    payment: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setJobData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    // handle the submission of jobData (e.g., send it to an API)
    // reset the form or close the modal after submission
    console.log('Submitting job data:', jobData)
    onClose()
  }

  return (
    <div className={AddJobCSS.popup}>
      <div className={AddJobCSS.popupContent}>
        {/* <div className={AddJobCSS.photoSection}>
          {addJob.photo && (
            <img src={addJob.photo} alt={"test"} className={AddJobCSS.jobPhoto} />
          )}
        </div> */}
      <div>
      <h3 className={AddJobCSS.title}>
                  <strong>Title:</strong>
              </h3>
              <input
              type='text'
              name='title'
                value={jobData.title}
              placeholder='Title'
                onChange={handleChange}
              />
      </div>

      <div>
        <h3 className={AddJobCSS.title}>
                  <strong>When:</strong>
        </h3>
            <input
              type='text'
              name='when'
              value={jobData.when}
              placeholder='When'
              onChange={handleChange}
            />
      </div>

      <div>
        <h3 className={AddJobCSS.title}>
                  <strong>When:</strong>
        </h3>
            <input
              type='text'
              name='payment'
              // value={jobData.payment}
              placeholder='payment'
              // onChange={handleChange}
            />
      </div>

        <div className={AddJobCSS.infoSection}>
        <h3 className={AddJobCSS.title}>
                  <strong>Description:</strong>
        </h3>
        <textarea
              name='description'
              // value={jobData.description}
              placeholder='description'
              // onChange={handleChange}
            />
        </div>
        <div className={AddJobCSS.buttonContainer}>
          <button onClick={handleSubmit} className={AddJobCSS.addButton}>Add Job</button>
        </div>
        <button onClick={onClose} className={AddJobCSS.closeButton}>Close</button>
      </div>
    </div>
  )
}

export default AddJob
