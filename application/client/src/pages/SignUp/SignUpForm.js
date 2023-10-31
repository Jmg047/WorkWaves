import React, { useRef, useState, useEffect } from 'react'
import './SignUpForm.css'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const EMAIL_REGEX = /\S+@\S+\.\S+/

const SignUpForm = () => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [email, setEmail] = useState('')
  const [vaildEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [phoneNumber, setPhoneNumber] = useState('')

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setValidName(result)
  }, [user])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    console.log(result)
    console.log(email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd)
    console.log(result)
    console.log(user)
    setValidPwd(result)
    const match = pwd === matchPwd
    setValidMatch(match)
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd, matchPwd])

  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v1 = USER_REGEX.test(user)
    const v2 = PWD_REGEX.test(pwd)
    if (v1 || v2) {
      setErrMsg('invalid entry')
      return
    }
    console.log(user, pwd)
    setSuccess(true)
    setUser('')
    setMatchPwd('')
    matchPwd('')
  }

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href='#'>Sign In</a>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg
            ? 'errmsg'
            : 'offscreen'} aria-live='assertive'>{errMsg}</p>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>
              username:
            </label>
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
            <p id='uidnote' className={userFocus && user &&
              !validName
              ? 'instructions'
              : 'offscreen'}>
              must be 4-24 characters. <br />
              must begin with a letter. <br />
              letters, numbers, underscore, hyphens allowed.
            </p>

            <label htmlFor='email'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={vaildEmail ? 'false' : 'true'}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />

            <p
              id='uidnote' className={
                email && emailFocus && !vaildEmail
                  ? 'instructions'
                  : 'offscreen'
              }
            >
              Please enter a valid email address.
            </p>

            <label htmlFor='phone'>
              Phone Number:
            </label>
            <input
              type='tel'
              id='phone'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />

            <label htmlFor='password'>
              password:
            </label>
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
            <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
              password must be 8 - 24 characters <br />
              must include upercase and lowercase letters, a number and a special character. <br />
              Allowed special characters:
              <span aria-label='exclamation mark'>!</span>
              <span aria-label='at symbol'>@</span>
              <span aria-label='hashtag'>#</span>
              <span aria-label='dollar sign'>$</span>
              <span aria-label='pecent'>%</span>
            </p>

            <label htmlFor='password'>
              confirm password:
            </label>
            <input
              type='password'
              id='confirm_pwd'
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? 'false' : 'true'}
              aria-describedby='confirmnote'
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
              must match the first password. <br />
            </p>

            <label>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              I agree to the terms and conditions <br />
            </label>

            <button disabled={!!(!validName || !validPwd || !validMatch)}>
              Sign Up
            </button>
            <p>
              Already registered?<br />
              <span className='line'>
                {/* put router link here */}
                <a href='#'>Sign In</a>
              </span>
            </p>
          </form>
        </section>
      )}
    </>
  )
}
export default SignUpForm
