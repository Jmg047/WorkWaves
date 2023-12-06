import React from 'react'

// * COMPONENTS IMPORT
import SettingsSideBar from '../../../component/ui/SettingsSideBar'
import AccountFeed from '../../../component/ui/AccountFeed'

// * CSS IMPORT
import AccountCSS from './Account.module.css'

function Account () {
  return (
    <div className={AccountCSS.Container}>
      <div className={AccountCSS.itemOne}>
        <SettingsSideBar />
        </div>
      <div className={AccountCSS.itemTwo}><AccountFeed /></div>
      <div className={AccountCSS.itemThree}></div>
  </div>
  )
}
export default Account
