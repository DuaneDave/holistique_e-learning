import React from 'react';
import Image from 'next/image';

import resources from '@public/assets/images/resources.png';

function HeroSection() {
  return (
    <section className="hero">
      <Image
        src={resources}
        alt="project background"
        aria-hidden="true"
        className="full-width full-height"
      />
    </section>
  );
}

export default HeroSection;
