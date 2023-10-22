import React, { useState } from 'react'
// import NavBar from 'component/ui/Navbar'

import NavBar from './component/ui/Navbar'
import './component/ui/Navbar.css'

const App = () => {
  const [query, setQuery] = useState('gigs') // Initialize query state with 'gigs'

  const handleSearch = (newQuery) => {
    setQuery(newQuery) // Set the query when a button is clicked
  }

  // const App = () => {
  //   const handleSearch = (query) => {
  //     console.log(Searching for: ${query})
  //   }

  return (
    <div>
      <NavBar />
    </div>
  )
}

export default App
