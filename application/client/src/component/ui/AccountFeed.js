import React, { useState } from 'react';
import './AccountFeed.module.css';

const AccountFeed = () => {
  const [userInfo] = useState({
    userId: 12345,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123'
  });

  return (
    <div className='account-form-container'>
      <h1>Account</h1>

      <div className='user-id-section'>
        <p>
          <strong>User ID:</strong> {userInfo.userId}
        </p>
      </div>

      <form className='account-form'>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            value={userInfo.name}
            readOnly
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            name='email'
            value={userInfo.email}
            readOnly
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            value={userInfo.password}
            readOnly
          />
        </div>
      </form>
    </div>
  );
}

export default AccountFeed;
