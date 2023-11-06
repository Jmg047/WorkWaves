import React from 'react'
import AppCSS from './App.module.css'
import { Route, Routes } from 'react-router-dom'

// * COMPONENTS IMPORTS
import NavBar from './component/ui/NavBar'
import Home from './pages/Home/Home'
import SignUpForm from './pages/SignUp/SignUpForm.js'
import LoginForm from './pages/Login/LoginForm.js'

const App = () => {
  return (
    <div className={AppCSS.App}>
      <NavBar />
      <div className={AppCSS.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      </div>
    </div>
  )
}
export default App
