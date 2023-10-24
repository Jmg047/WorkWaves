import React from 'react'
import { CategorySideBarData } from '../ui/CategorySideBarData'
// TODO : ? use REACT ROUTER to handle the route of my link/button


function CategorySideBar () {
  return (
    <div className='SideBar'>Category
      <ul className='SideBar-list'>
        {CategorySideBarData.map((val, key) => {
          return (
          <li key={key}
          className='category-row'
          id={window.location.pathname == val.link ? 'active' : ''}
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

// function CategorySideBar () {
//   return (
//     <div className='SideBar'>coolesy</div>
//   )
// }

// export default CategorySideBar
