import React from 'react'
import AppCSS from './App.module.css'
import { Route, Routes } from 'react-router-dom'

// * COMPONENTS IMPORTS
import NavBar from './component/ui/NavBar'
import './component/ui/Navbar.css'
import Home from './pages/Home/Home'
import SignUpForm from './pages/SignUp/SignUpForm.js'
import LoginForm from './pages/Login/LoginForm.js'

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
    <div className={AppCSS.App}>
      <NavBar />
      <div className={AppCSS.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
        {/* <div className={AppCSS.itemOne}><CategorySideBar /></div>
        <div className={AppCSS.itemTwo}><Feed /></div>
        <div className={AppCSS.itemThree}>Yessir</div> */}
      </div>
    </div>
  )
}

export default App
