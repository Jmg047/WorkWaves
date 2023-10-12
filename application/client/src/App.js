import React, { useState } from 'react'
import SearchBar from '../src/component/SearchBar.js'
import GigList from './GigList' // import the GigList component
// * file modified by sid
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
      <h1>Work Waves</h1>
      <button type='submit' onClick={() => handleSearch('job')}>find a job</button>
      <button type='submit' onClick={() => handleSearch('worker')}>find a worker</button>
      <SearchBar onSearch={handleSearch} />

       {/* Use the GigList component to display gig or worker data based on the query */}
       <GigList query={query} />
    </div>
  )
}

export default App
