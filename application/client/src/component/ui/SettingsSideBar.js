import React from 'react'
import { SettingsSideBarData } from './SettingsSideBarData'
import SettingsSideBarCSS from './SettingsSideBar.module.css'
// TODO : ? use REACT ROUTER to handle the route of my link/button

function SettingsSideBar () {
  return (
    <div className={SettingsSideBarCSS.SideBar}>
      <div className={SettingsSideBarCSS.Title}>Settings</div>
      <div className ={SettingsSideBarCSS.ButtonsContainer}>
     <div>Employer</div>
     <div>Worker</div>
     </div>
      <ul className={SettingsSideBarCSS.SideBarList}>
        {SettingsSideBarData.map((val, key) => {
          return (
          <li key={key}
          className={SettingsSideBarCSS.categoryRow}
          id={window.location.pathname === val.link ? 'active' : ''}
           onClick={() => {
             window.location.pathname = val.link
           }}
            >
           {' '}
           <div>
              {val.title}
           </div>
          </li>
          )
        })}
      </ul>
    </div>
  )
}
export default SettingsSideBar
