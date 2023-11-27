import React, { useState } from 'react'

// * LIBRARY IMPORT
import axios from 'axios'


import AddJobCSS from './AddJob.module.css'

// TODO: Remove displayedJobTitles and replace with jobTitles corresponding to the employer
// TODO: refined the styling of the modal to perfection 
// TODO: add the upload photo functionality
// TODO: fix the submission of data to the database

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
    console.log('Input changed:', name, value); // logging input changes
    setJobData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    console.log('Submitting job data:', jobData)
    try {
      const response = await axios.post('https://workwaves-jm2b5.ondigitalocean.app/api/create-gig', jobData);
      console.log('Job added successfully:', response.data);
      onClose(); // close the pop up after successful submission
    } catch (error) {
      console.error('Error adding job:', error);
      onClose();
    }
  }

  return (
    <div className={AddJobCSS.popup}>
      <div className={AddJobCSS.popupContent}>
        {/* <div className={AddJobCSS.photoSection}>
          {addJob.photo && (
            <img src={addJob.photo} alt={"test"} className={AddJobCSS.jobPhoto} />
          )}
        </div> */}
      <div className={AddJobCSS.InputContainer}>
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

      <div className={AddJobCSS.InputContainer}>
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

      <div className={AddJobCSS.InputContainer}>
        <h3 className={AddJobCSS.title}>
                  <strong>When:</strong>
        </h3>
            <input
              type='text'
              name='payment'
              value={jobData.payment}
              placeholder='payment'
              onChange={handleChange}
            />
      </div>

        <div className={AddJobCSS.infoSection}>
        <h3 className={AddJobCSS.title}>
                  <strong>Description:</strong>
        </h3>
        <textarea
              name='description'
              value={jobData.description}
              placeholder='description'
              onChange={handleChange}
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
