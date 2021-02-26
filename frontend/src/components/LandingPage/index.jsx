import React from 'react';
import RegisterForm from '../RegisterForm'
import logo from '../../assets/logo.svg';
import {
  Link
} from "react-router-dom";

import './style.scss';

const LandingPage = () => (
  <div className="landing">
    <img alt="logo" className="logo" src={logo}/>
    <h1>recipeze</h1>
    <h2>list your ingredients and we’ll make it easy!</h2>
    <RegisterForm/>
    <Link to="/home">
      <button className="meal">Login</button>
    </Link>
  </div>
)

export default LandingPage;
