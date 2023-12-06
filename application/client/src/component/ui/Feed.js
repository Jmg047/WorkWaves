import React, { useState, useEffect } from 'react'
// import JobRequest from './JobRequest'

// * LIBRARY IMPORT
import axios from 'axios'

// * COMPONENT IMPORT
import bartenderJob from './bartenderJob.png'
import JobDetails from './JobDetails'

// * CSS IMPORT
import FeedCSS from './Feed.module.css'

// TODO: refines job details pop-up style (buttons position)
// TODO: populate the "when" field in the job details pop-up -- waiting on Jaime to make the fielkd in the DB

function Feed ({ selectedCategory }) {
  const [jobTitles, setJobTitles] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    let apiUrl = 'https://workwaves-jm2b5.ondigitalocean.app/api/get-gigs'

    if (selectedCategory) {
      apiUrl = `https://workwaves-jm2b5.ondigitalocean.app/api/get-gigs?category=${selectedCategory}`
    }
    axios.get(apiUrl)
      .then(response => {
        const titles = response.data.map(job => job.title)
        setJobTitles(titles)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [selectedCategory])

  const openJobDetails = (jobTitle) => {
    axios.get(`https://workwaves-jm2b5.ondigitalocean.app/api/get-gigs?title=${jobTitle}`)
      .then(response => {
        console.log('Response received:', response)

        if (response.data.length > 0) {
          const jobDetails = response.data[0]
          console.log('Job details fetched:', jobDetails)
          setSelectedJob(jobDetails)
        } else {
          console.log('No job details found for this title.')
        }
      })
      .catch(error => {
        console.error('Error fetching job details:', error)
      })
  }

  const closeJobDetails = () => {
    setSelectedJob(null)
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
              <button href='/JobRequested' className={FeedCSS.JobButton}>Send job request</button>
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
