import React from 'react'
import AppCSS from './App.module.css'
import { Route, Routes } from 'react-router-dom'

// * COMPONENTS IMPORTS // tets
import NavBar from './component/ui/NavBar'
import Home from './pages/Home/Home'
import SignUpForm from './pages/SignUp/SignUpForm.js'
import LoginForm from './pages/Login/LoginForm.js'
import EJobs from './pages/Settings/EmployerSettings/EJobs'
import ERequests from './pages/Settings/EmployerSettings/ERequests'
import Account from './pages/Settings/EmployerSettings/Account'

const App = () => {
  return (
    <div className={AppCSS.App}>
      <NavBar />
      <div className={AppCSS.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/employer-settings-jobs' element={<EJobs />} />
          <Route path='/employer-settings-requests' element={<ERequests />} />
          <Route path='/employer-settings-account' element={<Account />} />
        </Routes>
      </div>
    </div>
  )
}
export default App
