// AccountFeed.js
import React, { useState } from 'react';
import AccountFeedCSS from './AccountFeed.module.css';

const AccountFeed = () => {
  const [userInfo] = useState({
    userId: 12345,
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
  });

  return (
    <div className={AccountFeedCSS.accountFeedContainer}>
      <div className={AccountFeedCSS.accountFormContainer}>
        <h1>Account</h1>
        <UserInfoSection userId={userInfo.userId} />
        <AccountForm userInfo={userInfo} />
      </div>
    </div>
  );
};

const UserInfoSection = ({ userId }) => (
  <div className={AccountFeedCSS.userIdSection}>
    <p>
      <strong>User ID:</strong> {userId}
    </p>
  </div>
);

const AccountForm = ({ userInfo }) => (
  <div className={AccountFeedCSS.accountFormBox}>
    <form className={AccountFeedCSS.accountForm}>
      <FormField label="Name" value={userInfo.name} readOnly />
      <FormField label="Email" value={userInfo.email} readOnly />
      <FormField label="Password" value="*********" readOnly />
    </form>
  </div>
);

const FormField = ({ label, value, readOnly }) => (
  <div className={AccountFeedCSS.formGroup}>
    <label htmlFor={label.toLowerCase()}>{label}:</label>
    <input
      type={label.toLowerCase() === 'password' ? 'password' : 'text'}
      name={label.toLowerCase()}
      value={value}
      readOnly={readOnly}
    />
  </div>
);

export default AccountFeed;
