import React from 'react'
import FeedCSS from './Feed.module.css'

function Feed () {
  return (
    <div className={FeedCSS.feed}> Feed Feed
        <div className={FeedCSS.grid}>Feed Grid
            <div className='grid-item grid-item-1'></div>
            <div className='grid-item grid-item-2'></div>
            <div className='grid-item grid-item-3'></div>
            <div className='grid-item grid-item-4'></div>
        </div>
    </div>
  )
}

export default Feed
