import React from 'react';
import {
  Link, useHistory
} from "react-router-dom";
import FacebookLogin from '../FacebookLogin'
import RegisterForm from '../RegisterForm'
import './style.scss';

const RegisterPage = (props) => {
  const history = useHistory();
  const responseFacebook = (response) => {
    props.setName(response.name);
    history.push('/home');
  }

  return (
    <div className="register">
      <h1><span className="underline">me</span>al.ly</h1>
      <h2 className="description">list your ingredients and we’ll make it easy!</h2>
      <RegisterForm db={props.db}/>
      <div className="new-account">
        <h3>Already have an account?</h3>
        <Link to="/">
          <h3 className="sign-in">Sign In</h3>
        </Link>
      </div>
      <span id="login-divider">or</span>
      <FacebookLogin 
      responseFacebook={responseFacebook}
      onClick={() => {
        console.log('hi world')
      }}/>
    </div>
  )
}

export default RegisterPage;
