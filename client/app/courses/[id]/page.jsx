import React from 'react';

import { availableModule } from '@/utils/courses';
import HeroSection from '@/component/courses/details/HeroSection';
import ModuleDetails from '@/component/courses/details/ModuleDetails';
import Comment from '@/component/courses/details/Comment';
import Comments from '@/component/courses/details/Comments';

function page({ params }) {
  const module = availableModule.find((module) => module.id === +params.id);

  return (
    <>
      <HeroSection module={module} />
      <ModuleDetails module={module} />
      <Comment module={module} />
      <Comments module={module} />
    </>
  );
}

export default page;
