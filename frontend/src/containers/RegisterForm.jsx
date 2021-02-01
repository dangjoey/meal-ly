import { Formik } from "formik";
import { withFormik } from 'formik';

import RegisterForm from '../components/RegisterForm';

const FormikRegisterForm = withFormik({
  mapPropsToValues({username, password}) {
    return {
      username: username || '',
      password: password || '',
    };
  },
})(RegisterForm);

export default FormikRegisterForm;