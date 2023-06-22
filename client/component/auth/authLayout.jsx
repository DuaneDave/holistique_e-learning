'use client';

import React from 'react';
import Image from 'next/image';

import authImage from '@/public/assets/images/professionals.png';

import styles from './auth.module.css';

function AuthLayout({ children }) {
  return (
    <section className={`flex align-y ${styles.auth}`}>
      <div className={`container full-width grid grid-2 ${styles.authWrapper}`}>
        <div className={styles.authImg}>
          <Image
            className="full-width full-height"
            src={authImage}
            alt="auth image"
            aria-hidden="true"
          />
          <div>
            <h1>Lorem Ipsum is simply</h1>
            <p>Lorem Ipsum is simply</p>
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}

export default AuthLayout;
