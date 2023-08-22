'use client';

import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BiSolidUserCircle } from 'react-icons/bi';

import { AuthContext } from '@/store/authContext';
import Dropdown from './Dropdown';

import logo from '../../public/assets/logo.png';
import avatar from '../../public/assets/icons/avatar.png';
import arrowDown from '../../public/assets/icons/chevron down.png';
import arrowDownBlack from '../../public/assets/icons/arrowdownblack.png';

import styles from './header.module.css';
import EditProfile from '../layout/EditProfile';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);

  const path = usePathname();

  const handleClick = () => {
    setShow(!show);
  };

  if (path === '/login' || path === '/signup' || path === '/faq') {
    return null;
  }

  return (
    <>
      <header
        className={`full-width ${styles.navigation} ${
          path === '/project-background' ||
          path === '/resources' ||
          path.includes('/courses') ||
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
              <li>
                <Link
                  href="/"
                  className={`${path === '/' ? styles.active : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/project-background"
                  className={`${
                    path === '/project-background' ? styles.active : ''
                  }`}
                >
                  Project Background
                </Link>
              </li>
              <li>
                {user && (
                  <Link
                    href="/resources"
                    className={`${path === '/resources' ? styles.active : ''}`}
                  >
                    Resource Center
                  </Link>
                )}
              </li>
              <li>
                {user && (
                  <Link
                    href="/courses"
                    className={`${
                      path.includes('/courses') ? styles.active : ''
                    }`}
                  >
                    Courses
                  </Link>
                )}
              </li>
            </ul>

            {user && (
              <span className={`flex center ${styles.user}`}>
                {user.profile_image ? (
                  <Image
                    src={
                      'https://holistique-e-learning.onrender.com/' +
                      user.profile_image
                    }
                    width={30}
                    height={30}
                    alt="current user"
                    style={{
                      borderRadius: '50%',
                    }}
                  />
                ) : (
                  <BiSolidUserCircle
                    className={styles.avatar}
                    style={{
                      color: path !== '/' ? '#ccc' : '',
                    }}
                  />
                )}
                <button className="flex align-y" onClick={handleClick}>
                  <p>{user.username}</p>

                  {path === '/' ? (
                    <Image src={arrowDown} alt="arrow down" />
                  ) : (
                    <Image src={arrowDownBlack} alt="arrow down black color" />
                  )}
                </button>
                {show && (
                  <Dropdown showdropdown="false" setshowdropdown={setShow} />
                )}
              </span>
            )}

            {!user && (
              <div className={`flex center gap ${styles.auth}`}>
                <Link href="/login">Login</Link>
                <Link
                  href="/signup"
                  style={{
                    color: path !== '/' ? 'var(--tertiary-color-dark)' : '',
                  }}
                >
                  Sign Up
                </Link>
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
      <EditProfile />
    </>
  );
}

export default Header;
