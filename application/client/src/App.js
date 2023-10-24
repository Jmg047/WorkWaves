import React, { useState } from 'react'
// import NavBar from 'component/ui/Navbar'

// * IMPORT EVERY COMPONENTS HERE
import NavBar from './component/ui/NavBar' // no error
import CategorySideBar from './component/ui/CategorySideBar'

const App = () => {
  // const [query, setQuery] = useState('gigs') // Initialize query state with 'gigs'

  // const handleSearch = (newQuery) => {
  //   setQuery(newQuery) // Set the query when a button is clicked
  // }

  // const App = () => {
  //   const handleSearch = (query) => {
  //     console.log(Searching for: ${query})
  //   }

  return (
    <div className='App-container'>
      <NavBar />
      <CategorySideBar />
    </div>
  )
}

export default App
