import React, { useState, useEffect } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    // Add a slight delay (e.g., 300ms) before triggering the search to reduce the number of requests
    const delay = setTimeout(() => {
      // Only perform a search if the input is not empty
      if (query) {
        console.log(query)
        fetch(`/workers/?FirstName=alice`) // Replace with your API endpoint and query parameter
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            // Update the search results
            setSearchResults(data);
          })
          .catch(error => {
            // Handle errors
            console.error('Error fetching data:', error);
          });
      } else {
        // Clear search results if the input is empty
        setSearchResults([]);
      }
    }, 300); // Adjust the delay as needed

    // Cleanup the timeout on input change
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={() => onSearch(query)}>Search</button>

      {/* Display search results */}
      <ul>
        {searchResults.map(result => (
          <li key={result._id}>{result.FirstName} {result.LastName}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
