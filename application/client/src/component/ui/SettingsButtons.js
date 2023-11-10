import React from 'react'

// * CSS IMPORT
import SettingsButtonsCSS from './SettingsButtons.module.css'

function SettingsButtons() {
  return (
    <div className={SettingsButtonsCSS.Container}>
    <div className={SettingsButtonsCSS.Title}>Settings</div>
     <div className ={SettingsButtonsCSS.ButtonsContainer}>
     <div>Button 1</div>
     <div>Button 2</div>
     </div>
 </div>
  )
}

export default SettingsButtons