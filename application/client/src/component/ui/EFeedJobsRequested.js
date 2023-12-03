import React, { useState, useEffect } from 'react'

// * LIBRARY IMPORT
import axios from 'axios'

// * COMPONENTS IMPORT
import bartenderJob from './bartenderJob.png'
import JobDetails from './JobDetails'

// * CSS IMPORT
import EFeedJobsRequestedCSS from './EFeedJobsRequested.module.css'

// TODO: populate the "when" field in the job details pop-up -- waiting on Jaime to make the fielkd in the DB

function EFeedJobsRequested () {
  const [jobTitles, setJobTitles] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    const apiUrl = 'https://workwaves-jm2b5.ondigitalocean.app/api/get-gigs'

    axios.get(apiUrl)
      .then(response => {
        const jobs = response.data // store full job data
        console.log('Fetched jobs:', jobs)
        setJobTitles(jobs) // update state with full job data
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  const openJobDetails = (selectedTitle) => {
    // find the job object based on the selected title
    const jobDetails = jobTitles.find(job => job.title === selectedTitle)
    if (jobDetails) {
      console.log('Selected job:', jobDetails)
      setSelectedJob(jobDetails)
    }
  }

  const closeJobDetails = () => {
    setSelectedJob(null)
  }

  const displayedJobTitles = jobTitles.slice(0, 2)

  return (
    <div>
      <h1 className={EFeedJobsRequestedCSS.Title}>JOBS</h1>
      <div className={EFeedJobsRequestedCSS.feed}>
        {displayedJobTitles.map((job, index) => (
          <div key={index} className={`${EFeedJobsRequestedCSS.post}`}>
            <div className={`${EFeedJobsRequestedCSS.item} item-${index + 1}`}>
              <img src={bartenderJob} alt='Job' width='350' height='170' />
              <div className={EFeedJobsRequestedCSS.JobTitle}>{job.title}</div>
              <div className={EFeedJobsRequestedCSS.jobButtonContainer}>
                <button onClick={() => openJobDetails(job.title)} className={EFeedJobsRequestedCSS.JobButton}>
                  Details
                </button>
                <button href='/JobRequested' className={EFeedJobsRequestedCSS.JobButton}>
                  Online
                </button>
              </div>
            </div>
          </div>
        ))}
        <button className={EFeedJobsRequestedCSS.AddJobButton}>Add a job</button>
        {selectedJob && (
          <JobDetails jobDetails={selectedJob} onClose={closeJobDetails} />
        )}
        {showSendJobRequest && (
        <SendJobRequest onClose={closeSendJobRequest} />
      )}
      </div>
    </div>
  )
}

export default EFeedJobsRequested
