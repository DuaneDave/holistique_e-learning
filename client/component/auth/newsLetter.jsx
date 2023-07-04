'use client';

import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../inputs/inputs';
import styles from './auth.module.css';

function NewsLetter() {
  const initialFormValues = {
    email: '',
  };

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('auth'));

    if (auth) {
      setFormData(auth);
      initialFormValues.email = auth.email;
    }
  }, []);

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={Yup.object({
        email: Yup.string().email('invalid Email Address').required('required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        signup(values, setSubmitting);
      }}
    >
      {({ handleSubmit }) => (
        <form
          className={` flex center gap ${styles.newsLetter}`}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            className={`rounded ${styles.email}`}
          />
          <button className=" rounded border-grey" type="submit">
            subscribe
          </button>
        </form>
      )}
    </Formik>
  );
}

export default NewsLetter;
