'use client';

import { useState, useEffect, useContext } from 'react';

import { CourseContext } from '@/store/courseContext';
import HeroSection from '@/component/courses/details/HeroSection';
import ModuleDetails from '@/component/courses/details/ModuleDetails';
import Comment from '@/component/courses/details/Comment';
import Comments from '@/component/courses/details/Comments';

function page({ params }) {
  const { courses, fetchCourses } = useContext(CourseContext);

  useEffect(() => {
    fetchCourses();
  }, []);

  const module = courses.find((module) => module._id === params.id);
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <>
      <HeroSection module={module} activeVideo={activeVideo} />
      <ModuleDetails
        module={module}
        setActiveVideo={setActiveVideo}
        activeVideo={activeVideo}
      />
      <Comment module={module} />
      <Comments module={module} />
    </>
  );
}

export default page;
