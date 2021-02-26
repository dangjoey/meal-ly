import React from "react";
import "./style.scss";
import { Form, Field } from "formik";

const RegisterForm = () => {
  return (
    <div className="register-form">
      <h1>Register</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <Field type="password" name="password" placeholder="Password" />
        <button>Login</button>
      </Form>
    </div>
  );
};

export default RegisterForm;
