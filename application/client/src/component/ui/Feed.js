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
        // Assuming the API returns details for a single job based on the title
        if (response.data.length > 0) {
          const jobDetails = response.data[0]; // Considering it returns a single job
          setSelectedJob(jobDetails);
        }
      })
      .catch(error => {
        console.error('Error fetching job details:', error);
      });
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
