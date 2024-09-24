import React, { useState } from 'react'

// * COMPONENTS IMPORT
import CategorySideBar from '../../component/ui/CategorySideBar'
import Feed from '../../component/ui/Feed'

// * CSS IMPORT
import HomeCSS from './Home.module.css'

function Home () {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const updateCategory = (category) => {
    setSelectedCategory(category)
  }

  return (
  <div className={HomeCSS.container}>
      <div><CategorySideBar updateCategory={updateCategory} /></div>
      <div><Feed selectedCategory={selectedCategory} /></div>
      <div></div>
  </div>
  )
}

export default Home
