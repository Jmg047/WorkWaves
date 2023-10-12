import React, { useState, useEffect } from 'react'

function SearchBar ({ onSearch }) {
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      // Only perform a search if the input is not empty
      if (query) {
        console.log(query)
        fetch(`https://oyster-app-yztvt.ondigitalocean.app:2000/get-workers/?FirstName=${query}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok')
            }
            return response.json()
          })
          .then(data => {
            // Update the search results
            setSearchResults(data)
          })
          .catch(error => {
            if (error.message === 'Network response was not ok') {
              console.error('Server error: Something went wrong on the server.')
            } else {
              console.error('Network error: Unable to fetch data.')
            }
          })
      } else {
        // Clear search results if the input is empty
        setSearchResults([])
      }
    }, 100)

    return () => clearTimeout(delay)
  }, [query])

  return (
    <div>
      <input
        type='text'
        placeholder='Search...'
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={() => onSearch(query)}>Search</button>

      {/* Display search results */}
      <ul>
        {searchResults.map(result => (
          <li key={result._id}>{result.FirstName} {result.LastName} {result.Location}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar
