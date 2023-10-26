import React from 'react'
import FeedCSS from './Feed.module.css'
import bartenderJob from './bartenderJob.png'

function Feed () {
  return (
    <div className={FeedCSS.feed}> Feed Feed
        <div className={FeedCSS.post}>
            <div className={`${FeedCSS.item} item-1`}>
                <img src={bartenderJob} alt='Job' width='250' height='150' />
                  Looking for a Bartender
                  <div>
                    <a href='/JobDetails'>Details</a>
                    <a href='/JobRequested'>Send job request</a>
                  </div>
            </div>
              
            <div className={`${FeedCSS.item} item-2`}>
              <img src={bartenderJob} alt='Job' width='250' height='150' />
                Looking for a Bartender
                <div>
                  <a href='/JobDetails'>Details</a>
                  <a href='/JobRequested'>Send job request</a>
                </div>
            </div>

            <div className={`${FeedCSS.item} item-3`}>
              <img src={bartenderJob} alt='Job' width='250' height='150' />
                Looking for a Bartender
                <div>
                  <a href='/JobDetails'>Details</a>
                  <a href='/JobRequested'>Send job request</a>
                </div>
            </div>
            
            <div className={`${FeedCSS.item} item-3`}>
              <img src={bartenderJob} alt='Job' width='250' height='150' />
                Looking for a Bartender
                <div>
                  <a href='/JobDetails'>Details</a>
                  <a href='/JobRequested'>Send job request</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feed
