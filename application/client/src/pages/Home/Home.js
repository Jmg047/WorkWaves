import React from 'react'

// * COMPONENTS IMPORT
// import CategorySideBar from 'ui/CategorySideBar'
// import Feed from 'ui/Feed'

import CategorySideBar from '../../component/ui/CategorySideBar'
import Feed from '../../component/ui/Feed'

// * CSS IMPORT
import HomeCSS from './Home.module.css'

function
Home () {
  return (
  <div className={HomeCSS.container}>
      <div className={HomeCSS.itemOne}><CategorySideBar /></div>
      <div className={HomeCSS.itemTwo}><Feed /></div>
      <div className={HomeCSS.itemThree}></div>
  </div>
  )
}

export default Home
