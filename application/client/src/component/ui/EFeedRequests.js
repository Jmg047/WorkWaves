import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ElonMusk from './ElonMusk.png';
import JobDetails from './JobDetails';
import EFeedRequestsCSS from './EFeedRequests.module.css';

function EFeedRequests({ selectedCategory }) {
  const [jobTitles, setJobTitles] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    let apiUrl = 'https://workwaves-jm2b5.ondigitalocean.app/api/get-gigs';

    if (selectedCategory) {
      apiUrl = `https://workwaves-jm2b5.ondigitalocean.app/api/get-gigs?category=${selectedCategory}`;
    }
    
    axios.get(apiUrl)
      .then(response => {
        const titles = response.data.map(job => job.title);
        setJobTitles(titles.slice(0, 2)); // display only the first two job titles
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [selectedCategory]);

  const openJobDetails = (jobTitle) => {
    axios.get(`https://workwaves-jm2b5.ondigitalocean.app/api/get-gigs?title=${jobTitle}`)
      .then(response => {
        if (response.data.length > 0) {
          const jobDetails = response.data[0];
          setSelectedJob(jobDetails);
        } else {
          console.log('No job details found for this title.');
        }
      })
      .catch(error => {
        console.error('Error fetching job details:', error);
      });
  };

  const closeJobDetails = () => {
    setSelectedJob(null);
  };

  return (
    <div>
      <h1 className={EFeedRequestsCSS.Title}>Requests</h1>
      <div className={EFeedRequestsCSS.Feed}>
        {jobTitles.map((jobTitle, index) => (
          <div key={index} className={EFeedRequestsCSS.RequestsContainer}>
            <div className={EFeedRequestsCSS.RequestsPhotos}>
              <img className={EFeedRequestsCSS.Photos} src={ElonMusk} alt='Job' width='280' height='220' />
            </div>
            <div className={EFeedRequestsCSS.RequestsDetails}>
              <div className={EFeedRequestsCSS.IsRequestFor}>
                is requesting for
              </div>
              <div>{`Looking for: ${jobTitle}`}</div>
              <button onClick={() => openJobDetails(jobTitle)}>Details</button>
            </div>
            <div className={EFeedRequestsCSS.RequestsButtons}>
              <button>Accept</button>
              <button>Decline</button>
            </div>
          </div>
        ))}
      </div>
      {selectedJob && (
        <JobDetails jobDetails={selectedJob} onClose={closeJobDetails} />
      )}
    </div>
  );
}

export default EFeedRequests;
