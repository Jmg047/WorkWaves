import React from 'react'
import SearchBar from '../src/component/SearchBar.js'

const App = () => {
  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  }

  return (
    <div>
      <h1>Work Waves</h1>
      <button type='submit'>find a job</button>
      <button type='submit'>find a worker</button>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
