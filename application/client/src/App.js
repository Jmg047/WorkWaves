import React from 'react'
import AppCSS from './App.module.css'
import { Route, Routes } from 'react-router-dom'

// * COMPONENTS IMPORTS
import NavBar from './component/ui/NavBar'
import Home from './pages/Home/Home'
import SignUpForm from './pages/SignUp/SignUpForm.js'
import LoginForm from './pages/Login/LoginForm.js'
import Feed from './component/ui/Feed.js'
/* -housing
- books
- clothes
- lessons
- car
- collectibles
- computer
-retail
-bikes */
const App = () => {
  return (
    <div className={AppCSS.App}>
      <NavBar />
      <div className={AppCSS.container}>
        <Routes>
          <Route path='/' element={<Home />}>

          {/*TODO: Clean this up from nested routes over to properly defined routes such as:
          
              <Route path='/' element={<Home />} />
            <Route path='/kid' element={<Home />} />
            <Route path='/pet' element={<Home />} />
                ... other category routes 
            */}
              <Route path='kid' element={<Feed selectedCategory='kid' />} />      
              <Route path='pet' element={<Feed selectedCategory='pet' />} />
              <Route path='security' element={<Feed selectedCategory='security' />} />
              <Route path='housing' element={<Feed selectedCategory='housing' />} />
              <Route path='books' element={<Feed selectedCategory='books' />} />
              <Route path='clothes' element={<Feed selectedCategory='clothes' />} />
              <Route path='lessons' element={<Feed selectedCategory='lessons' />} />
              <Route path='car' element={<Feed selectedCategory='car' />} />
              <Route path='collectibles' element={<Feed selectedCategory='collectibles' />} />
              <Route path='computer' element={<Feed selectedCategory='computer' />} />
              <Route path='retail' element={<Feed selectedCategory='retail' />} />
              <Route path='bikes' element={<Feed selectedCategory='bikes' />} />
          </Route>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      </div>
    </div>
  )
}
export default App
