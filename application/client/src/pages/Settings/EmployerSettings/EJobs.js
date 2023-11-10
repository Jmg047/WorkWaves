import React from 'react'

// * COMPONENTS IMPORT
// import CategorySideBar from 'ui/CategorySideBar'
// import Feed from 'ui/Feed'

import CategorySideBar from '../../../component/ui/CategorySideBar'
import EFeedJobsRequested from '../../../component/ui/EFeedJobsRequested'
import SettingsButtons from '../../../component/ui/SettingsButtons'

// * CSS IMPORT
import EJobsCSS from './EJobs.module.css'

function EJobs () {
  return (
    <div className={EJobsCSS.Container}>
      <div className={EJobsCSS.itemOne}>
        <SettingsButtons />
        <CategorySideBar />
        </div>
      <div className={EJobsCSS.itemTwo}><EFeedJobsRequested /></div>
      <div className={EJobsCSS.itemThree}></div>
  </div>
  )
}

export default EJobs
