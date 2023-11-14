import React from 'react'

// * LIBRARY IMPORT


// * COMPONENT IMPORT
// import bartenderJob from './bartenderJob.png'

// * CSS IMPORT
import EFeedRequestsCSS from './EFeedRequests.module.css'

// TODO: modify it to match the UI design

function EFeedRequests () {
  return (
      <div>
      <h1 className={EFeedRequestsCSS.Title}>Requests</h1>
      <div className={EFeedRequestsCSS.Feed}>
        Feed
        <div className={EFeedRequestsCSS.RequestContainer}>
          <div className={EFeedRequestsCSS.Photos}>Photos</div>
          <div className={EFeedRequestsCSS.RequestDetails}>Middle infor</div>
          <div className={EFeedRequestsCSS.RequestsButtons}>Buttons</div>
        </div>
      </div>
      </div>
  )
}

export default EFeedRequests
