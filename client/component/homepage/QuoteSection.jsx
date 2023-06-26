import React from 'react';

import styles from './homepage.module.css';

function QuoteSection() {
  return (
    <section
      className={`container flex flex-col center gap ${styles.quote}`}
    >
      <blockquote className='text-center'>
        “ If access to healthcare is considered a human right, who is considered
        human enough to have that right? ”
      </blockquote>

      <p className='text-center'>Paul Farmer</p>
    </section>
  );
}

export default QuoteSection;
