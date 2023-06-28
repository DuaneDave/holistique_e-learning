'use client';

import { useState, useContext } from 'react';
import Link from 'next/link';

import { AuthContext } from '@/store/authContext';

import styles from './header.module.css';

function Dropdown({ ...props }) {
  const { logout } = useContext(AuthContext);

  return (
    <div className={`flex flex-col gap ${styles.dropdown}`} {...props}>
      <Link href="/profile">My Profile</Link>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Dropdown;
