import React, { useState } from 'react';
import './Signin.css'; // Ensure you create and link this CSS file

const Signin = () => {
  // State to toggle between Login and Register form
  const [isSignup, setIsSignup] = useState(false);

  // Function to toggle between login and signup forms
  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="signin-container">
      <div className="form-container">
        {!isSignup ? (
          <div className="login-form">
            <h2 className="form-title">Sign In</h2>
            <input type="email" className="input-field" placeholder="Email" required />
            <input type="password" className="input-field" placeholder="Password" required />
            <button className="login-btn">Login</button>
            <p className="form-footer">
              Don't have an account?{' '}
              <span className="form-switch" onClick={toggleForm}>
                Create Account
              </span>
            </p>
          </div>
        ) : (
          <div className="signup-form">
            <h2 className="form-title">Register</h2>
            <input type="text" className="input-field" placeholder="Full Name" required />
            <input type="email" className="input-field" placeholder="Email" required />
            <input type="password" className="input-field" placeholder="Password" required />
            <input type="password" className="input-field" placeholder="Confirm Password" required />
            <button className="signup-btn">Create Account</button>
            <p className="form-footer">
              Already have an account?{' '}
              <span className="form-switch" onClick={toggleForm}>
                Sign In
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signin;
