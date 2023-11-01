import React, { useState } from 'react'
import SearchBar from '../ui/SearchBar'

export default function NavBar () {
  const [searchType, setSearchType] = useState('')

  const handleSearch = (type) => {
    if (type === 'find a job') {
      setSearchType('')
    } else if (type === 'find a worker') {
      setSearchType('worker')
    }
  }

  return (
    <nav className='nav'>
      <a href='/' className='site-title'>
        Work Waves
      </a>
      <ul>
        <li className='active'>
          <button onClick={() => handleSearch('find a job')}>Find a job</button>
        </li>
        <li>
          <button onClick={() => handleSearch('find a worker')}>Find a worker</button>
        </li>
        <li className='searchbar-container'>
          <SearchBar onSearch={searchType} />
        </li>
      </ul>
    </nav>
  )
}
