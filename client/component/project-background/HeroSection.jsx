import React from 'react';
import Image from 'next/image';

import projectBackground from '@public/assets/images/project background.png';

function HeroSection() {
  return (
    <section className="hero">
      <Image
        src={projectBackground}
        alt="project background"
        aria-hidden="true"
        className="full-width full-height"
      />
    </section>
  );
}

export default HeroSection;
