import React from "react";
import { Formik, Form, Field } from "formik";

import "./style.scss";

const RegisterForm = () => {
  return (
    <div className="register">
      <Formik>
        <Form className="register-form">
          <Field className="form" type="text" placeholder="Username" />
          <Field className="form" type="password" placeholder="Password" />
        </Form>
    </Formik>
    </div>
  );
};

export default RegisterForm;
