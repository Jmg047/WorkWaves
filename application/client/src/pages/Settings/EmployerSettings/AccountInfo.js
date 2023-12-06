import React from 'react'

// * COMPONENTS IMPORT
import SettingsSideBar from '../../../component/ui/SettingsSideBar'
import AccountInfo from '../../../component/ui/AccountInfo'

// * CSS IMPORT
import AccountInfoCSS from './AccountInfo.module.css'

function AccountInfo () {
  return (
    <div className={AccountInfoCSS.Container}>
      <div className={AccountInfoCSS.itemOne}>
        <SettingsSideBar />
        </div>
      <div className={AccountinfoCSS.itemTwo}><AccountInfo /></div>
      <div className={AccountInfoCSS.itemThree}></div>
  </div>
  )
}
export default AccountInfo