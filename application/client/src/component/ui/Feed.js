import React, { useState, useEffect } from 'react'
import bartenderJob from './bartenderJob.png'

// * LIBRARY IMPORT
import axios from 'axios'

// * CSS IMPORT
import FeedCSS from './Feed.module.css'

function Feed () {
  const [jobTitles, setJobTitles] = useState([])

  useEffect(() => {
    const apiUrl = 'http://localhost:2000/get-gigs'

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

  // use the slice method to limit the number of job titles to 4
  const displayedJobTitles = jobTitles.slice(0, 4)

  return (
    <div className={FeedCSS.feed}>
      {displayedJobTitles.map((title, index) => (
        <div key={index} className={`${FeedCSS.post}`}>
          <div className={`${FeedCSS.item} item-${index + 1}`}>
            <img src={bartenderJob} alt='Job' width='250' height='150' />
            {title}
            <div className={FeedCSS.jobButtonContainer}>
              <a href='/JobDetails'>Details</a>
              <a href='/JobRequested'>Send job request</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Feed
