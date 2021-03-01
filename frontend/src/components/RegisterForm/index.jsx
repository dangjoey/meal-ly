import React from "react";
import { Formik, Form, Field } from "formik";
import envelope from '../../assets/envelope.svg'
import lock from '../../assets/lock.svg'

import "./style.scss";

const RegisterForm = (props) => {
  return (
    <Formik>
      <Form className="register-form">
        <div className="form">
          <Field className="username" type="text" placeholder="Email" />
          <img alt="email" className="email" src={envelope}/>
        </div>
        <div className="form">
          <Field className="password" type="password" placeholder={props.password} />
          <img alt="lock" className="lock" src={lock}/>
        </div>
      </Form>
      </Formik>
  );
};

export default RegisterForm;
