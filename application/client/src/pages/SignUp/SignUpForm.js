import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import './SignUpForm.css'

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
// const EMAIL_REGEX = /\S+@\S+\.\S+/

const SignUpForm = () => {
  const userRef = useRef()
  const [user, setUser] = useState('')
  const [validName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // check if the username, password, and email are valid
    // const v1 = USER_REGEX.test(user)
    // const v2 = PWD_REGEX.test(pwd)
    // if (!v1 || !v2) {
    //  setErrMsg('Invalid entry')
    //  return
    // }

    try {
      console.log('Sending registration request...')
      const response = await Axios.post('https://workwaves-prototype-w9ikm.ondigitalocean.app/api/registration', null, {
        params: {
          username: user,
          password: pwd,
          email: email
        }
      })

      if (response.status === 201) {
        console.log('Registration successful')
        setSuccess(true)
      } else {
        console.log('Registration failed')
        setErrMsg('Registration failed')
      }
    } catch (error) {
      console.error('Error during registration:', error)
      setErrMsg('Error during registration. Please try again.')
    }
  }

  return (
    <div className='SignupContainer'>
      {success
        ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to='/login'>Sign In</Link>
          </p>
        </section>
          )
        : (
        <section>
          <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
            {errMsg}
          </p>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {/* Username input */}
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              ref={userRef}
              autoComplete='off'
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? 'false' : 'true'}
              aria-describedby='uidnote'
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id='uidnote'
              className={userFocus && user && !validName ? 'instructions' : 'offscreen'}
            >
              Must be 4-24 characters. Must begin with a letter.
            </p>

            {/* Email input */}
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? 'false' : 'true'}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id='emailnote'
              className={emailFocus && email && !validEmail ? 'instructions' : 'offscreen'}
            >
              Please enter a valid email address.
            </p>

            {/* Password input */}
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? 'false' : 'true'}
              aria-describedby='pwdnote'
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id='pwdnote'
              className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
            >
              Password must be 8-24 characters, include uppercase, lowercase letters, a number, and a special character.
            </p>

            {/* Checkbox for terms and conditions */}
            <label>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              I agree to the terms and conditions.
            </label>

            <button onSubmit={handleSubmit}>Sign Up</button>
            <p>
              Already registered?{' '}
              <span className='line'>
                <Link to='/login'>Sign In</Link>
              </span>
            </p>
          </form>
        </section>
          )}
    </div>
  )
}

export default SignUpForm
