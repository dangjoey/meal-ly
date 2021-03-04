import React from "react";
import {
  Link
} from "react-router-dom";
import envelope from '../../assets/envelope.svg'
import lock from '../../assets/lock.svg'

import "./style.scss";

const RegisterForm = () => {
  return (
    <form className="register-form">
      <div className="form">
        <input 
          className="username"
          placeholder="Email"
          type="email" />
        <img alt="email" className="email" name="password" src={envelope}/>
      </div>
      <div className="form">
        <input className="password" 
          placeholder="Password"
          type="password" />
        <img alt="lock" className="lock" src={lock}/>
      </div>
      <Link to="/home">
        <button className="login" type="submit">Sign In</button>
      </Link>
    </form>
  );
};

export default RegisterForm;
