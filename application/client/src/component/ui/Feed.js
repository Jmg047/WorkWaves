import React, { useState, useEffect } from 'react'
// import JobRequest from './JobRequest'

// * LIBRARY IMPORT
import axios from 'axios'

// * COMPONENT IMPORT
import bartenderJob from './bartenderJob.png'
import JobDetails from './JobDetails'

// * CSS IMPORT
import FeedCSS from './Feed.module.css'

// TODO: refines pop-up for job details
// TODO: pop-up remove static data and populate with data from the database

function Feed () {
  const [jobTitles, setJobTitles] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    const apiUrl = 'https://workwaves-jm2b5.ondigitalocean.app/api/get-gigs'

    axios.get(apiUrl)
      .then(response => {
        const titles = response.data.map(job => job.title)
        setJobTitles(titles)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const openJobDetails = (job) => {
    // For testing purposes, generate static data
    const staticJobDetails = {
      title: 'Software Engineer',
      where: 'San Francisco, CA',
      when: 'Full-time',
      payment: 'Competitive salary',
      description: 'Exciting opportunity for a skilled software engineer...',
      photo: 'path/to/your/photo.jpg'
    }

    const openJobRequest = (job) => {
      const staticJobRequet = {

      
      }
    }

    setSelectedJob(staticJobDetails)
  }

  const closeJobDetails = () => {
    setSelectedJob(null)
  }
  // const openJobRequestModal = () => {
  //   setShowJobRequestModal(true)
  // }

  // const closeJobRequestModal = () => {
  //   setShowJobRequestModal(false)
  // }

  return (
    <div className={FeedCSS.feed}>
      {jobTitles.map((job, index) => (
        <div key={index} className={`${FeedCSS.post}`}>
          <div className={`${FeedCSS.item} item-${index + 1}`}>
            <img src={bartenderJob} alt='Job' width='350' height='170' />
            <div className={FeedCSS.JobTitle}>{job}</div>
            <div className={FeedCSS.jobButtonContainer}>
              <button onClick={() => openJobDetails(job)} className={FeedCSS.JobButton}>Details</button>
              <button onClick={() => openJobRequest(job)} className={FeedCSS.JobButton}>Send job request</button>
            </div>
          </div>
        </div>
      ))}
      {selectedJob && (
        <JobDetails jobDetails={selectedJob} onClose={closeJobDetails} />
      )}
    </div>
  )
}

export default Feed
