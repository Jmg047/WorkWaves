import React, { useState } from 'react'
// import SearchBar from './component/ui/SearchBar.js'
// import Homepage from './pages/Homepage/Homepage.js' // import the GigList component
import LoginForm from './pages/Login/LoginForm.js'
import SignUpForm from './pages/SignUp/SignUpForm.js'
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
      <SignUpForm />
    </div>
  )
}

export default App
