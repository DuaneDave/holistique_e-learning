'use client';

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { TextArea } from '@/component/inputs/inputs';

import styles from './details.module.css';

function Comment({ module }) {
  return (
    <section>
      <div className={`container ${styles.comment}`}>
        <h2>Share your review</h2>

        <Formik
          initialValues={{
            post: '',
          }}
          validationSchema={Yup.object({
            post: Yup.string().required('Please enter a post'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
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
              <TextArea
                name="post"
                placeholder="Write your review here"
                className="full-width"
              />

              <button type="submit" className={styles.submit}>
                POST
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Comment;
