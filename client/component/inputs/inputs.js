import Link from 'next/link';
import { useField } from 'formik';

import styles from './inputs.module.css';

function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className={styles.inputWrapper}>
      <div className={` flex flex-col ${styles.inputField}`}>
        <label htmlFor={props.name}>{label}</label>
        <input
          className={meta.touched && meta.error ? 'invalid' : ''}
          {...field}
          {...props}
        />
      </div>

      {meta.touched && meta.error ? (
        <div className={styles.invalid}>{meta.error}</div>
      ) : null}
    </div>
  );
}

export function TextArea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <textarea
        className={meta.touched && meta.error ? 'invalid' : ''}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.invalid}>{meta.error}</div>
      ) : null}
    </div>
  );
}

export function RememberMe({ handleRememberMe }) {
  return (
    <div className={`flex align-y ${styles.rememberMeContainer}`}>
      <div className={`flex align-y ${styles.rememberMe}`}>
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          onChange={(e) => handleRememberMe(e.target.checked)}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      <Link href="/forgot-password">Forgot password?</Link>
    </div>
  );
}

export default Input;
