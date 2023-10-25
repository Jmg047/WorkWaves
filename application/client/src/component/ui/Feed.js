import React from 'react'
import FeedCSS from './Feed.module.css'

function Feed () {
  return (
    <div className={FeedCSS.feed}>
        <div className={FeedCSS.grid}>Feed
            <div className='grid-item grid-item-1'></div>
            <div className='grid-item grid-item-2'></div>
            <div className='grid-item grid-item-3'></div>
            <div className='grid-item grid-item-4'></div>
        </div>
    </div>
  )
}

export default Feed
