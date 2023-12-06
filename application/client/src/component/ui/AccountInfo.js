// AccountInfo.js

import React from 'react'
import { Link } from 'react-router-dom' //use react router
import './AccountInfo.module.css'

const AccountInfo = () => {
  const userInfo = {
    userId: 12345,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123'
  }

  return (
    <div className='custom-account-settings'>
      <h1>Account Settings</h1>

      <div className='user-id-section'>
        <p>
          <strong>User ID:</strong> {userInfo.userId}
        </p>
      </div>

      <div className='custom-form-group'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' value={userInfo.name} readOnly />
      </div>

      <div className='custom-form-group'>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' value={userInfo.email} readOnly />
      </div>

      <div className='custom-form-group'>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' value={userInfo.password} readOnly />
      </div>

      <Link to='/employer-settings-accountInfo'>
        <button className='custom-button'>Change Information</button>
      </Link>
    </div>
  )
}

export default AccountInfo
