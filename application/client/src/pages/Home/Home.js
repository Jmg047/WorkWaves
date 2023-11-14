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
      <div><CategorySideBar /></div>
      <div><Feed /></div>
      <div></div>
  </div>
  )
}

export default Home
