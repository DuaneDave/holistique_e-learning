import React from 'react';
import Image from 'next/image';

import logo from '@public/assets/logo.png';

import styles from './header.module.css';

function Footer() {
  return (
    <footer className={`flex flex-col center ${styles.footer}`}>
      <div className={`flex center ${styles.logo}`}>
        <Image
          src={logo}
          alt="company logo"
          className="full-width full-height"
        />
        <span>
          <p>
            Live chat with <br />
            Professionals
          </p>
        </span>
      </div>

      <div className={`text-center`}>
        <h2>STAY INFORMED</h2>
        <p>
          Stay up to date with our initiatives, new resources and project
          developments
        </p>
      </div>
    </footer>
  );
}

export default Footer;
