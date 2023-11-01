import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

// * CSS IMPORT
import './LoginForm.css'

const LoginForm = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      console.log('Sending login request...')
      const response = await Axios.get('/https://workwaves-prototype-w9ikm.ondigitalocean.app/api/login?username=james_worker1&password=hashed_password_81', {
        username: user,
        password: pwd
      })

      // check the response for success or error messages
      if (response.status === 200) {
        console.log('Login successful')
        // login successful
        setSuccess(true)
      } else {
        console.log('Login failed')
        // login failed, display an error message
        setErrMsg('Invalid username or password')
      }
    } catch (error) {
      console.error('Error during login:', error)
      setErrMsg('Error during login. Please try again.')
    }
  }

  return (
        <>
        <div className='LoginContainer'>
        {success
          ? (
            <section>
                <h1> You are logged in</h1>
                <br />
                <p>
                    <a href='#'>Go to Home</a>
                </p>
            </section>
            )
          : (
        <section>
            <p ref={errRef} className={errMsg
              ? 'errmsg'
              : 'offscreen'} aria-live='assertove'>{errMsg}</p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input
                    type='text'
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor='password'>Password:</label>
                <input
                    type='password'
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
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
        </>
  )
}
export default LoginForm
