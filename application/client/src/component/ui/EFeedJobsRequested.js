import React, { useState, useEffect } from 'react'

// * LIBRARY IMPORT
import axios from 'axios'

// * COMPONENT IMPORT
import bartenderJob from './bartenderJob.png'
import JobDetails from './JobDetails'

// * CSS IMPORT
import EFeedJobsRequestedCSS from './EFeedJobsRequested.module.css'

// TODO: Remove displayedJobTitles and replace with jobTitles corresponding to the employer
// TODO: Implement Pop up button to add a job
// TODO: Online button should be reflecting the status of the post
// TODO: Refine CSS to match UI design

function EFeedJobsRequested () {
  const [jobTitles, setJobTitles] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    const apiUrl = 'https://workwaves-jm2b5.ondigitalocean.app/api/get-gigs'

    axios.get(apiUrl)
      .then(response => {
        // extract job titles from the response and update the state
        const titles = response.data.map(job => job.title)
        setJobTitles(titles)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const openJobDetails = (job) => {
    setSelectedJob(job)
  }

  const closeJobDetails = () => {
    setSelectedJob(null)
  }

  // * Currently displaying 2 jobs onn purpose to match UI design
  // use the slice method to limit the number of job titles to 4
  const displayedJobTitles = jobTitles.slice(0, 2)

  return (
    <div>
    <h1>SETTINGS</h1>
    <div className={EFeedJobsRequestedCSS.feed}>
      {displayedJobTitles.map((job, index) => (
        <div key={index} className={`${EFeedJobsRequestedCSS.post}`}>
          <div className={`${EFeedJobsRequestedCSS.item} item-${index + 1}`}>
            <img src={bartenderJob} alt='Job' width='350' height='170' />
            <div className={EFeedJobsRequestedCSS.JobTitle}>{job}</div>
            <div className={EFeedJobsRequestedCSS.jobButtonContainer}>
              <button onClick={() => openJobDetails(job)} className={EFeedJobsRequestedCSS.JobButton}>Details</button>
              <button href='/JobRequested' className={EFeedJobsRequestedCSS.JobButton}>Online</button>
            </div>
          </div>

        </div>
      ))}
        <button className={EFeedJobsRequestedCSS.JobButton}>Add a job</button>
      {selectedJob && (
        <JobDetails jobDetails={selectedJob} onClose={closeJobDetails} />
      )}
    </div>
    </div>
  )
}

export default EFeedJobsRequested
