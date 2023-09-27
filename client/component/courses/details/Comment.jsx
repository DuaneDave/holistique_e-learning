'use client';

import { useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { TextArea } from '@/component/inputs/inputs';
import { CourseContext } from '@/store/courseContext';

import styles from './details.module.css';

function Comment({ module }) {
  const { postComment } = useContext(CourseContext);

  const foundModule = module?.lessons;

  if (!foundModule) return null;

  return (
    <section>
      <div className={`container ${styles.comment}`}>
        <h2>Share your review</h2>

        <Formik
          initialValues={{
            content: '',
          }}
          validationSchema={Yup.object({
            content: Yup.string().required('Please enter a post'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            postComment({ ...values, course_id: module._id }, setSubmitting);
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
                name="content"
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
