'use client';

import React, { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Input from '../inputs/inputs';
import styles from './auth.module.css';
import { AuthContext } from '@store/authContext';

function NewsLetter() {
  const { subscribe } = useContext(AuthContext);

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('invalid Email Address').required('required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        subscribe(values);

        setSubmitting(false);
      }}
      className={`${styles.formik}`}
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
