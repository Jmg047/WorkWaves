import React, { useState, useEffect } from 'react'
import axios from 'axios'
import bartenderJob from './bartenderJob.png'
import JobDetails from './JobDetails'
import JobRequest from './JobRequest'
import FeedCSS from './Feed.module.css'

function Feed () {
  const [jobTitles, setJobTitles] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)
  const [showJobRequestModal, setShowJobRequestModal] = useState(false)
  const [selectedJobForRequest, setSelectedJobForRequest] = useState(null)
  const [selectedJobRequestData, setSelectedJobRequestData] = useState(null)

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


    /*TODO: Sample job request data "static must end up using 
    a data scruture or something to pull data from BE"*/
  const openJobDetails = (job) => {
    const staticJobDetails = {
      title: 'Software Engineer',
      where: 'San Francisco, CA',
      when: 'Full-time',
      payment: 'Competitive salary',
      description: 'Exciting opportunity for a skilled software engineer...',
      photo: 'path/to/your/photo.jpg'
    }

    setSelectedJob(staticJobDetails)
  }

  const closeJobDetails = () => {
    setSelectedJob(null)
  }

  const openJobRequestModal = (job) => {
    setShowJobRequestModal(true)


    /*TODO: Sample job request data "static must end up using 
    a data scruture or something to pull data from BE"*/
    const sampleJobRequestData = {
      where: 'Sf',
      when: 'Flexible schedule',
      payment: 'Hourly rate $25'
    
    }

    setSelectedJobForRequest(job)
    setSelectedJobRequestData(sampleJobRequestData)
  }

  const closeJobRequestModal = () => {
    setShowJobRequestModal(false)
    setSelectedJobForRequest(null)
    setSelectedJobRequestData(null)
  }

  return (
    <div className={FeedCSS.feed}>
      {jobTitles.map((job, index) => (
        <div key={index} className={`${FeedCSS.post}`}>
          <div className={`${FeedCSS.item} item-${index + 1}`}>
            <img src={bartenderJob} alt='Job' width='350' height='170' />
            <div className={FeedCSS.JobTitle}>{job}</div>
            <div className={FeedCSS.jobButtonContainer}>
              <button onClick={() => openJobDetails(job)} className={FeedCSS.JobButton}>Details</button>
              <button onClick={() => openJobRequestModal(job)} className={FeedCSS.JobButton}>Send job request</button>
            </div>
          </div>
        </div>
      ))}
      {selectedJob && (
        <JobDetails jobDetails={selectedJob} onClose={closeJobDetails} />
      )}
      {showJobRequestModal && selectedJobForRequest && selectedJobRequestData && (
        <JobRequest jobRequestData={selectedJobRequestData} onClose={closeJobRequestModal} />
      )}
    </div>
  )
}

export default Feed
