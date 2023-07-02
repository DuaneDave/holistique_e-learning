'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { AuthContext } from '@/store/authContext';
import Dropdown from './Dropdown';

import logo from '../../public/assets/logo.png';
import avatar from '../../public/assets/icons/avatar.png';
import arrowDown from '../../public/assets/icons/chevron down.png';

import styles from './header.module.css';

const navLinks = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Project Background',
    path: '/project-background',
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
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const { user } = useContext(AuthContext);

  const path = usePathname();

  if (path === '/login' || path === '/signup' || path === '/faq') {
    return null;
  }

  return (
    <header
      className={`full-width ${styles.navigation} ${
        path === '/project-background' ||
        path === '/resources' ||
        path === '/courses' ||
        path === '/community'
          ? styles.navBg
          : ''
      }`}
    >
      <nav className={`flex align-y full-width container`}>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>

        <div className={`flex align-y ${styles.navigationInfo}`}>
          <ul className={`flex gap ${isOpen ? styles.toggleNav : ''}`}>
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

          {user && (
            <span className={`flex center ${styles.user}`}>
              <Image src={avatar} width={30} height={30} alt="current user" />
              <button className="flex align-y" onClick={() => setShow(!show)}>
                <p>John Doe</p>

                <Image src={arrowDown} alt="arrow down" />
              </button>
              {show && <Dropdown />}
            </span>
          )}

          {!user && (
            <div className={`flex center gap ${styles.auth}`}>
              <Link href="/login">Login</Link>
              <Link href="/signup">Sign Up</Link>
            </div>
          )}

          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
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
