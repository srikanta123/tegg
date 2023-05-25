import React from 'react';
import withRegistrationValidation from './withRegistrationValidation';

const RegistrationPage = (props) => {
  const { username, email, password, errors, handleChange, handleSubmit } = props;

  return (
    <div>
      <h1>Registration Page with Higher-Order-Components</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={handleChange} />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default withRegistrationValidation(RegistrationPage);