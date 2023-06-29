import React from 'react';

import HeroSection from '@/component/project-background/HeroSection';
import Description from '@/component/project-background/Description';
import WhatsNew from '@/component/project-background/WhatsNew';

function ProjectBackground() {
  return (
    <>
      <HeroSection />
      <Description />
      <WhatsNew />
    </>
  );
}

export default ProjectBackground;
