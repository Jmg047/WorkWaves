import React, { useState, useEffect } from 'react'
import axios from 'axios'

// * CSS IMPORT
import SearchBarCSS from './SearchBar.module.css'

function SearchBar ({ onSearch }) {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const URL = process.env.BASE_URL || 'http://localhost:2000'

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const fetchGigs = (query) => {
    axios.get(`${URL}/get-gigs/?title=${query}`)
      .then((response) => {
        setSearchResults(response.data)
      })
      .catch((error) => {
        if (error.response) {
          console.error(`Server error: ${error.response.data}`)
        } else {
          console.error('Network error: Unable to fetch data.')
        }
      })
  }

  const fetchWorkers = (query) => {
    axios.get(`${URL}/get-workers/?FirstName=${query}`)
      .then((response) => {
        setSearchResults(response.data)
      })
      .catch((error) => {
        if (error.response) {
          console.error(`Server error: ${error.response.data}`)
        } else {
          console.error('Network error: Unable to fetch data.')
        }
      })
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query) {
        setIsSearching(true)
        if (onSearch) {
          fetchWorkers(query) // For "Find a worker"
        } else {
          fetchGigs(query) // For "Find a job"
        }
      } else {
        setIsSearching(false)
        setSearchResults([])
      }
    }, 100)

    return () => clearTimeout(delay)
  }, [query, onSearch])

  return (
    <div className={SearchBarCSS.searchContainer}>
      <input
        type='text'
        placeholder='Search...'
        value={query}
        onChange={handleInputChange}
        className={SearchBarCSS.searchInput}
      />
      <button onClick={() => onSearch(query)} className={SearchBarCSS.searchButton}>Search</button>

    {isSearching && (
      <ul className='search-results'>
        {searchResults.map((result) => (
          <li key={result._id} className='search-results'>
            {onSearch
              ? `${result.FirstName} ${result.LastName} ${result.Location}`
              : `${result.title} ${result.location}`}
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default SearchBar
