import React, { useState, useEffect } from 'react'

// * LIBRARY IMPORT
import axios from 'axios'

// * COMPONENT IMPORT
import bartenderJob from './bartenderJob.png'
import JobDetails from './JobDetails'
import AddJob from './AddJob'

// * CSS IMPORT
import EFeedJobsRequestedCSS from './EFeedJobsRequested.module.css'

// TODO: Remove displayedJobTitles and replace with jobTitles corresponding to the employer
// TODO: Refined pop-up for job details
// TODO: pop-up remove static data and populate with data from the database
// TODO: Online button should be reflecting the status of the posted job (online/offline)
// TODO: get Employer/Settings buttons to work

const defaultAddJobData = {
  title: 'Job Title',
  where: 'Location',
  when: 'Date',
  payment: ' Payment',
  description: 'Description'
}

function EFeedJobsRequested () {
  const [jobTitles, setJobTitles] = useState([])
  const [showAddJobPopup, setShowAddJobPopup] = useState(false)
  const [addJobData, setAddJobData] = useState(null) // State for addJobData
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

    // Simulating fetched data or default data assignment
    const fetchedAddJobData = { ...defaultAddJobData } // Using default data for simulation
    setAddJobData(fetchedAddJobData)
  }, [])

  const openJobDetails = (job) => {
    setSelectedJob(job)
  }

  const closeJobDetails = () => {
    setSelectedJob(null)
  }

  const openAddJobPopup = () => {
    console.log('Opening AddJob popup')
    setShowAddJobPopup(true)
  }

  const closeAddJobPopup = () => {
    console.log('Closing AddJob popup')
    setShowAddJobPopup(false)
  }

  // * Currently displaying 2 jobs on purpose to match UI design
  // use the slice method to limit the number of job titles to 4
  const displayedJobTitles = jobTitles.slice(0, 2)

  return (
    <div>
    <h1 className={EFeedJobsRequestedCSS.Title}>JOBS</h1>
    <div className={EFeedJobsRequestedCSS.feed}>
      {displayedJobTitles.map((job, index) => (
        <div key={index} className={`${EFeedJobsRequestedCSS.post}`}>
          <div className={`${EFeedJobsRequestedCSS.item} item-${index + 1}`}>
            <img src={bartenderJob} alt='Job' width='350' height='170' />
            <div className={EFeedJobsRequestedCSS.JobTitle}>{job}</div>
            <div className={EFeedJobsRequestedCSS.jobButtonContainer}>
              <button
                onClick={() => openJobDetails(job)}
                className={EFeedJobsRequestedCSS.JobButton}>
                Details
              </button>
              <button
                href='/JobRequested'
                className={EFeedJobsRequestedCSS.JobButton}>
                Online
              </button>
            </div>
          </div>
        </div>
      ))}
        <button
          onClick={openAddJobPopup}
          className={EFeedJobsRequestedCSS.AddJobButton}>
          Add a job
        </button>
      {selectedJob && (
        <JobDetails jobDetails={selectedJob} onClose={closeJobDetails} />
      )}
      {showAddJobPopup && <AddJob addJob={addJobData} onClose={closeAddJobPopup} />}
    </div>
    </div>
  )
}
export default EFeedJobsRequested
