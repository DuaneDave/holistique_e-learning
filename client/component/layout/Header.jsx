'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logo from '../../public/assets/logo.png';

import styles from './header.module.css';

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Project Background',
    path: '/projects',
  },
  {
    name: 'Resource Centre',
    path: '/resources',
  },
  {
    name: 'Course',
    path: '/courses',
  },
  {
    name: 'Community',
    path: '/community',
  },
];

function Header() {
  const path = usePathname();

  if (path === '/login' || path === '/signup') {
    return null;
  }

  return (
    <header className={`full-width ${styles.navigation}`}>
      <nav className={`flex align-y full-width container`}>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>

        <div className={`flex align-y ${styles.navigationInfo}`}>
          <ul className="flex gap">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`${path === link.path ? styles.active : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <span className={`flex center ${styles.user}`}>
            <Image src={logo} width={50} height={50} alt="current user" />
            <span>
              <p>John Doe</p>
            </span>
          </span>

          <button className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
