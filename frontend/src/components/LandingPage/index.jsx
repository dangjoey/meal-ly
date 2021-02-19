import React from 'react';
import logo from '../../assets/logo.svg';
import {
  Link
} from "react-router-dom";

import './style.scss';

const LandingPage = () => (
  <div className="landing">
    <h1>recipeze</h1>
    <h2>list your ingredients and we’ll make it easy!</h2>
    <img alt='logo' className="logo" src={logo}/>
    <Link to="/home">
      <button className="meal">Find Your Meal!</button>
    </Link>
  </div>
)

export default LandingPage;
