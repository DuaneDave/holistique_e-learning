'use client';

import { useState, useEffect, useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

import Input, { RememberMe } from '../inputs/inputs';
import AuthHeader from './authHeader';
import { AuthContext } from '@store/authContext';

import styles from './auth.module.css';

function LoginForm() {
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { user, login } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'));

    if (auth) {
      setFormData(auth);

      setRememberMe(true);

      // initialFormValues.email = auth.email;
      // initialFormValues.password = auth.password;
    }
  }, []);

  return (
    <Formik
      initialValues={formData}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        login(values, rememberMe, setSubmitting);
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
              value={formData.email}
            />
            <Input
              label="password"
              name="password"
              type="password"
              placeholder="Enter Your Password"
              value={formData.password}
            />
          </div>

          <RememberMe handleRememberMe={setRememberMe} checked={rememberMe} />

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
