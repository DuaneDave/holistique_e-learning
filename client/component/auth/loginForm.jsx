'use client';

import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input, { RememberMe } from '../inputs/inputs';
import AuthHeader from './authHeader';

import styles from './auth.module.css';

function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);

  console.log(rememberMe)

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          onAlert(false);
          setSubmitting(false);
        }, 3000);
      }}
    >
      {({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col ${styles.form}`}
        >
          <AuthHeader
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
          />

          <div className={`flex flex-col ${styles.inputWrapper}`}>
            <Input
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
            />
            <Input
              label="password"
              name="password"
              type="password"
              placeholder="Enter Your Password"
            />
          </div>

          <RememberMe handleRememberMe={setRememberMe} />

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
