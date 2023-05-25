import React, { useState } from 'react';

const withRegistrationValidation = (WrappedComponent) => {
  return (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
      username: '',
      email: '',
      password: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'email') {
        setEmail(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log('Registration form submitted');
        alert('Registration form submitted successfully');
        setUsername('');
        setEmail('');
        setPassword('');

      } else {
        console.log('Registration form has errors');
      }
    };

    const validateForm = () => {
      const newErrors = {};

      // Validate username
      if (username.trim() === '') {
        newErrors.username = 'Username is required';
      }

      // Validate email
      if (email.trim() === '') {
        newErrors.email = 'Email is required';
      } else if (!isValidEmail(email)) {
        newErrors.email = 'Invalid email format';
      }

      // Validate password
      if (password.trim() === '') {
        newErrors.password = 'Password is required';
      } else if (password.length < 6) {
        newErrors.password = 'Password should be at least 6 characters long';
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    return (
      <WrappedComponent
        username={username}
        email={email}
        password={password}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        {...props}
      />
    );
  };
};

export default withRegistrationValidation;










