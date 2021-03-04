import { withFormik } from 'formik';

import RegisterForm from './RegisterForm';

const FormikRegisterForm = withFormik({
  mapPropsToValues({email, password}) {
    return {
      email: email || '',
      password: password || '',
    };
  },
})(RegisterForm);

export default FormikRegisterForm;