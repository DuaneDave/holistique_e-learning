'use client';

import { useState } from 'react';

import { availableModule } from '@/utils/courses';
import HeroSection from '@/component/courses/details/HeroSection';
import ModuleDetails from '@/component/courses/details/ModuleDetails';
import Comment from '@/component/courses/details/Comment';
import Comments from '@/component/courses/details/Comments';

function page({ params }) {
  const module = availableModule.find((module) => module.id === +params.id);
  const [activeVideo, setActiveVideo] = useState(module.lessons[0].id);

  return (
    <>
      <HeroSection module={module} activeVideo={activeVideo} />
      <ModuleDetails module={module} setActiveVideo={setActiveVideo} activeVideo={activeVideo} />
      <Comment module={module} />
      <Comments module={module} />
    </>
  );
}

export default page;
