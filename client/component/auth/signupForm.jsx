'use client';
import { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../inputs/inputs';
import AuthHeader from './authHeader';
import { AuthContext } from '@store/authContext';

import styles from './auth.module.css';

function SignupForm() {
  const { signup } = useContext(AuthContext);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        username: Yup.string()
          .required('Required')
          .min(6, 'Must be 8 characters or more')
          .max(20, 'Must be 20 characters or less'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        signup(values, setSubmitting);
      }}
    >
      {({ handleSubmit }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className={`flex flex-col ${styles.form}`}
        >
          <AuthHeader text="Register to access the online stigma-reduction education course and other project resources." />

          <div className={`flex flex-col ${styles.inputWrapper}`}>
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
            />
            <Input
              label="User name"
              name="username"
              type="text"
              placeholder="Enter Your Email User name"
            />
            <Input
              label="password"
              name="password"
              type="password"
              placeholder="Enter Your Password"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default SignupForm;
