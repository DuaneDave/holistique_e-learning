import React from 'react';

import styles from './details.module.css';

function HeroSection({ module }) {
  return (
    <section className={styles.detailsContainer}>
      <video src={module.video} className="full-width full-height" controls />
    </section>
  );
}

export default HeroSection;
