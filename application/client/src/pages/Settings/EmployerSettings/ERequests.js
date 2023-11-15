import React from 'react'

// * COMPONENTS IMPORT
import SettingsSideBar from '../../../component/ui/SettingsSideBar'
import EFeedRequests from '../../../component/ui/EFeedRequests'

// * CSS IMPORT
import EJobsCSS from './EJobs.module.css'

function ERequests () {
  return (
      <div className={EJobsCSS.Container}>
        <div className={EJobsCSS.itemOne}>
          <SettingsSideBar />
          </div>
        <div className={EJobsCSS.itemTwo}><EFeedRequests/></div>
        <div className={EJobsCSS.itemThree}></div>
    </div>
  )
}
export default ERequests
