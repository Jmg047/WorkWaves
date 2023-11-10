import React from 'react'
import AppCSS from './App.module.css'
import { Route, Routes } from 'react-router-dom'

// * COMPONENTS IMPORTS
import NavBar from './component/ui/NavBar'
// import Home from './pages/Home/Home'
import SignUpForm from './pages/SignUp/SignUpForm.js'
import LoginForm from './pages/Login/LoginForm.js'
import EJobs from './pages/Settings/EmployerSettings/EJobs'
import SettingsButtons from './component/ui/SettingsButtons'

const App = () => {
  return (
    <div className={AppCSS.App}>
      <NavBar /> 
      <div className={AppCSS.container}>
        <Routes>
          <Route path='/' element={<SettingsButtons />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route path='/employer-settings-jobs' element={<EJobs />} />
        </Routes>
      </div>
    </div>
  )
}
export default App
