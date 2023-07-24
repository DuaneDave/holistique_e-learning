'use client';

import Image from 'next/image';
import React, { useContext } from 'react';
import { usePathname } from 'next/navigation';
import { AuthContext } from '@/store/authContext';

import FooterLogo from '../../public/assets/images/footerIcon.svg';
import styles from './footer.module.css';
import NewsLetter from '../auth/newsLetter';


function Footer() {
  const { loggedInUser} = useContext(AuthContext);

  const path = usePathname();

  if (path === '/login' || path === '/signup' || path === '/faq') {
    return null;
  }

  return (
    <footer
      className={`full-width flex flex-col gap-md ${styles.footer}`}
    >
      <div className={`flex center gap ${styles.info}`}>
        <Image
          className="flex center circle"
          src={FooterLogo}
          alt="footer_logo"
        />
        <p>Live Chat with professionals</p>
      </div>
      <div className={`flex flex-col align-y ${styles.newsLetter}`}>
        <h2>STAY INFORMED</h2>
        <p>
          stay up to date with our initiatives, new resources and project
          developments
        </p>
        <NewsLetter />
      </div>
      <ul className="flex gap full-width center">
        <li>Courses</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </footer>
  );
}

export default Footer;
