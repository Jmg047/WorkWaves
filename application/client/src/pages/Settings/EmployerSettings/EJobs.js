import React from 'react'

// * COMPONENTS IMPORT
import SettingsSideBar from '../../../component/ui/SettingsSideBar'
import EFeedJobsRequested from '../../../component/ui/EFeedJobsRequested'

// * CSS IMPORT
import EJobsCSS from './EJobs.module.css'

function EJobs () {
  return (
    <div className={EJobsCSS.Container}>
      <div className={EJobsCSS.itemOne}>
        <SettingsSideBar />
        </div>
      <div className={EJobsCSS.itemTwo}><EFeedJobsRequested /></div>
      <div className={EJobsCSS.itemThree}></div>
  </div>
  )
}
export default EJobs
