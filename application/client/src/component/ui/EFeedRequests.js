import React from 'react'

// * LIBRARY IMPORT


// * COMPONENT IMPORT
import ElonMusk from './ElonMusk.png'

// * CSS IMPORT
import EFeedRequestsCSS from './EFeedRequests.module.css'

// TODO: modify it to match the UI design

function EFeedRequests () {
  return (
      <div>
      <h1 className={EFeedRequestsCSS.Title}>Requests</h1>
      <div className={EFeedRequestsCSS.Feed}>
        <div className={EFeedRequestsCSS.RequestsContainer}>
          <div className={EFeedRequestsCSS.RequestsPhotos}>
            <img className= {EFeedRequestsCSS.Photos}src={ElonMusk} alt='Job' width='280' height='220'  />
            </div>
          <div className={EFeedRequestsCSS.RequestsDetails}>
            <div className={EFeedRequestsCSS.IsRequestFor}> is requesting for </div>
            <div> Looking for a bartender </div>
            <button>Details</button>
            </div>
          <div className={EFeedRequestsCSS.RequestsButtons}>
          <button>Accept</button>
          <button>Decline</button>
            </div>
        </div>
      </div>
      </div>
  )
}

export default EFeedRequests
