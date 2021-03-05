import React from 'react';
import {
  useHistory, 
  Link
} from "react-router-dom";
import FacebookLogin from '../FacebookLogin'
import LoginForm from '../LoginForm'
import './style.scss';

const LandingPage = (props) => {
  const history = useHistory();
  const responseFacebook = (response) => {
    props.setName(response.name);
    history.push('/home');
  }

  return (
    <div className="landing">
      <h1><span className="underline">me</span>al.ly</h1>
      <h2 className="description">list your ingredients and we’ll make it easy!</h2>
      <LoginForm setName={props.setName} db={props.db}/>
      <div className="new-account">
        <h3>Don’t have an account?</h3>
        <Link to="/register">
        <h3 className="sign-up">Sign Up</h3>
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

export default LandingPage;
