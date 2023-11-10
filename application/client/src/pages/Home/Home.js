import React from 'react'
import { useParams } from 'react-router-dom'

// * COMPONENTS IMPORT
// import CategorySideBar from 'ui/CategorySideBar'
// import Feed from 'ui/Feed'

import CategorySideBar from '../../component/ui/CategorySideBar'
import Feed from '../../component/ui/Feed'

// * CSS IMPORT
import HomeCSS from './Home.module.css'

function
Home () {
  // const { selectedCategory } = useParams()           // This is the initialization of selectedCategory, originally this would get passed
  // console.log(selectedCategory)                      // over to the Feed component. The problem? selectedCategory 
  const [selectedCategory, setSelectedCategory] = useState('')  // keeps coming out as 'undefined' in chrome devtools.
  return (
    <div className={HomeCSS.container}>
      <div className={HomeCSS.itemOne}><CategorySideBar /></div>
      {/* Pass selectedCategory to the Feed component */}
      <div className={HomeCSS.itemTwo}><Feed  /></div>
      <div className={HomeCSS.itemThree}></div>
    </div>
  )
}

export default Home
