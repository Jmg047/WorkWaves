import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import './LoginForm.css'

const LoginForm = () => {
  const userRef = useRef()
  const errRef = useRef()
  const [username, setUser] = useState('')
  const [password, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState('')

  const URL = process.env.BASE_URL || 'http://localhost:2000'

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log('Sending login request...')
      const response = await Axios.post(URL + '/login', {
        username: username,
        password: password
      })

      if (response.status === 200) {
        console.log('Login successful')
        setSuccess(true)
        setLoggedInUser(username) // Store the logged-in username
      } else {
        console.log('Login failed')
        setErrMsg('Invalid username or password')
      }
    } catch (error) {
      console.error('Error during login:', error)
      setErrMsg('Error during login. Please try again.')
    }
  }

  return (
    <div className='LoginContainer'>
      {success
        ? (
        <section>
          <h1>Hi, {loggedInUser}! You are logged in</h1>
          <br />
          <p>
            <Link to='/'>Go to Home</Link>
          </p>
        </section>
          )
        : (
        <section>
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertove'>{errMsg}</p>
          <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input
                    type='text'
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={username}
                    required
                />

                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={password}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className='line'>
                    {/* router link */}
                    <Link to='/signup'>Sign Up</Link>
                </span>
            </p>
        </section>

          )}
        </div>
  )
}
export default LoginForm
