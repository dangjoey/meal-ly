import React, { useState } from "react";
import {
  useHistory
} from "react-router-dom";
import { notification } from 'antd';
import envelope from '../../assets/envelope.svg'
import lock from '../../assets/lock.svg'

import "./style.scss";

const LoginForm = (props) => {
  const [formInputs, setFormInputs] = useState({});
  const history = useHistory();

  const submitForm = async(e) => {
    e.preventDefault();
    console.log('form');
    console.log(formInputs);
    const email = formInputs.email;
    const password = formInputs.password;

    console.log(email);
    const docRef = props.db.collection("user").doc(email);

    docRef.get().then((doc) => {
      if (doc.exists) {
        if (doc.data() && doc.data().password == password) {
          return history.push('/home');
        }
        else {
          notification.open({
            message: 'Error',
            description: 'Incorrect Password!'
          });
        }
      } else {
        notification.open({
          message: 'Error',
          description: 'Account does not exist!'
        });
      }
    });
  }

  const onType = (e) => {
    e.preventDefault();
    const formInputsCopy = {...formInputs};
    formInputsCopy[e.target.name] = e.target.value;
    setFormInputs(formInputsCopy);
  }
  return (
    <form className="register-form">
      <div className="form">
        <input 
          className="username"
          name="email"
          onChange={onType}
          placeholder="Email"
          type="email" />
        <img alt="email" className="email" name="password" src={envelope}/>
      </div>
      <div className="form">
        <input className="password"
          name="password"
          onChange={onType} 
          placeholder="Password"
          type="password" />
        <img alt="lock" className="lock" src={lock}/>
      </div>
      <button className="login" onClick={submitForm} type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;
