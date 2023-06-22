import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './auth.module.css';

function AuthHeader({ text }) {
  const pathname = usePathname();

  return (
    <div className={styles.authHeader}>
      <h2 className="text-center">Welcome to project holistique...!</h2>

      <nav className="flex center">
        <ul className="flex gap-md align-y">
          <li>
            <Link
              href="/login"
              className={pathname === '/login' ? styles.active : ''}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/signin"
              className={pathname === '/signin' ? styles.active : ''}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>

      <p>{text}</p>
    </div>
  );
}

export default AuthHeader;
