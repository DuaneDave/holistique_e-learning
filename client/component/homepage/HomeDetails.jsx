import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import headeStyle from '@public/assets/design/heading style.png';

import styles from './homepage.module.css';

function HomeDetails({ item }) {
  return (
    <section>
      <div className="container">
        <Link
          href="/"
          style={{
            margin: '3rem 0',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="28"
            viewBox="0 0 30 28"
            fill="none"
          >
            <path
              d="M30 14.9375H3.66211L15.1904 26.4658L13.8721 27.7842L0.0878906 14L13.8721 0.21582L15.1904 1.53418L3.66211 13.0625H30V14.9375Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>

      <Image
        src={item.hero_image}
        alt={item.heading1 + ' ' + item.heading2}
        className="full-width full-height"
        style={{ objectFit: 'cover', maxHeight: '80dvh' }}
      />

      <div
        className="container"
        style={{
          marginBottom: '2rem',
        }}
      >
        <Image
          src={headeStyle}
          alt="heading style"
          aria-hidden="true"
          height={80}
          width={80}
          style={{ margin: '1rem 0 -1rem -1rem' }}
        />
        <h2>
          {item.heading1} {item.heading2}
        </h2>

        <p>
          {item.details}{' '}
          <Link
            href={item.link}
            style={{
              color: '#23BDEE',
            }}
          >
            {item.link_title}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default HomeDetails;
