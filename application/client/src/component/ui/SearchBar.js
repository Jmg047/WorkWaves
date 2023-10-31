import React, { useState, useEffect } from 'react'
import axios from 'axios'

// * CSS IMPORT
import SearchBarCSS from './SearchBar.module.css'

function SearchBar ({ onSearch }) {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query) {
        axios.get(`https://workwaves-prototype-w9ikm.ondigitalocean.app:2000/get-workers/?FirstName=${query}`)
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
      } else {
        setSearchResults([])
      }
    }, 100)

    return () => clearTimeout(delay)
  }, [query])

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

      <ul>
        {searchResults.map((result) => (
          <li key={result._id}>
            {result.FirstName} {result.LastName} {result.Location}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar
