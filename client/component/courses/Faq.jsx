import React from 'react';
import Link from 'next/link';

import styles from './courses.module.css';

function Faq() {
  return (
    <section className='container'>
      <div className={` text-center ${styles.faqSection}`}>
        <h2>Frequently Asked Questions</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </p>

        <Link href="/faq">View all</Link>
      </div>
    </section>
  );
}

export default Faq;
