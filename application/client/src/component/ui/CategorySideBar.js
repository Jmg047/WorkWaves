import React from 'react'
import { CategorySideBarData } from './CategorySideBarData'
import CategorySideBarCSS from './CategorySideBar.module.css'
// TODO : ? use REACT ROUTER to handle the route of my link/button

function CategorySideBar () {
  return (
    <div className={CategorySideBarCSS.SideBar}>
      <div className={CategorySideBarCSS.Title}>Category</div>
      <ul className={CategorySideBarCSS.SideBarList}>
        {CategorySideBarData.map((val, key) => {
          return (
          <li key={key}
          className={CategorySideBarCSS.categoryRow}
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
export default CategorySideBar
