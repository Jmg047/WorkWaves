import React, { useState, useEffect } from 'react'

// * LIBRARY IMPORT
import axios from 'axios'

// * CSS IMPORT

import CategorySideBarCSS from './CategorySideBar.module.css'

function CategorySideBar ({ updateCategory }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const apiUrl = 'http://localhost:2000/get-gigs'

    axios
      .get(apiUrl)
      .then((response) => {
        console.log('API Response:', response.data)
        // check if the data is an array before setting the state
        if (Array.isArray(response.data)) {
          console.log('Setting categories:', response.data.slice(0, 12))
          setCategories(response.data.slice(0, 12))
        } else {
          console.error('API did not return an array:', response.data)
        }
      })
      .catch((error) => console.error('Error fetching categories:', error))
  }, [])

  const handleCategoryClick = (category) => {
    // logic for handling the click event
    console.log('Clicked on category:', category)
    updateCategory(category) // update the selected category in the parent component
  }

  return (
    <div className={CategorySideBarCSS.SideBar}>
      <div className={CategorySideBarCSS.Title}>Category</div>
      <ul className={CategorySideBarCSS.SideBarList}>
       {categories.map((category, index) => (
          <li
            key={index}
            className={CategorySideBarCSS.categoryRow}
            onClick={() => handleCategoryClick(category.category)}
          >
            <div>{category.category}</div>
          </li>
       ))}
      </ul>
    </div>
  )
}
export default CategorySideBar
