import React, { useState, useEffect } from 'react'

// * LIBRARY IMPORT
import axios from 'axios'

// * COMPONENT IMPORT
import bartenderJob from './bartenderJob.png'
import JobDetails from './JobDetails'

// * CSS IMPORT
import FeedCSS from './Feed.module.css'

function Feed () {    // originally, selectedCategory was a param,...
  const [selectedCategory, setSelectedCategory] = useState('')   // Now selectedCategory is passed as a prop to this component
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    const apiUrl = `http://localhost:2000/get-gigs?category=${selectedCategory}`

    axios
      .get(apiUrl)
      .then((response) => {
        setJobs(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [selectedCategory])

  const openJobDetails = (job) => {
    setSelectedJob(job)
  }

  const closeJobDetails = () => {
    setSelectedJob(null)
  }

  return (
    <div className={FeedCSS.feed}>
      {jobs.map((job, index) => (
        <div key={index} className={`${FeedCSS.post}`}>
          <div className={`${FeedCSS.item} item-${index + 1}`}>
            <img src={bartenderJob} alt='Job' width='350' height='170' />
            <div className={FeedCSS.JobTitle}>{job.title}</div>
            <div className={FeedCSS.jobButtonContainer}>
              <button onClick={() => openJobDetails(job)} className={FeedCSS.JobButton}>
                Details
              </button>
              <button href='/JobRequested' className={FeedCSS.JobButton}>
                Send job request
              </button>
            </div>
          </div>
        </div>
      ))}
      {selectedJob && <JobDetails jobDetails={selectedJob} onClose={closeJobDetails} />}
    </div>
  )
}

export default Feed
