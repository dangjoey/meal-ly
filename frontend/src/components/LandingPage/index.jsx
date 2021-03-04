import React from 'react';
import FacebookLogin from '../FacebookLogin'
import RegisterForm from '../RegisterForm'
import './style.scss';

const LandingPage = () => {

  return (
    <div className="landing">
      <h1><span className="underline">me</span>al.ly</h1>
      <h2 className="description">list your ingredients and we’ll make it easy!</h2>
      <RegisterForm />
      <div className="new-account">
        <h3>Don’t have an account?</h3>
        <h3 className="sign-up">Sign Up</h3>
      </div>
      <span id="login-divider">or</span>
      <FacebookLogin />
    </div>
  )
}

export default LandingPage;
