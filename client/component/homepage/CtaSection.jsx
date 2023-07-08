import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import DisplayCard from '../ui/Cards';

import professionals from '../../public/assets/images/professionals.png';

import styles from './homepage.module.css';

function CtaSection() {
  return (
    <section className={`container ${styles.cta}`}>
      <DisplayCard className={`grid-2 gap-lg ${styles.ctaContainer}`}>
        <Image
          src={professionals}
          alt="professionals"
          aria-hidden="true"
          className="full-width full-height"
        />

        <div className={`flex flex-col align-x`}>
          <p>
            Professionals who support people who inject drugs should have access
            to information and education in order to provide stigma-free care
            for people who inject drugs.
          </p>

          <span className="flex flex-fluid">
            <p>TAKE THE COURSE FOR FREE</p>
            <Link href="/">Learn more</Link>
          </span>
        </div>
      </DisplayCard>
    </section>
  );
}

export default CtaSection;
