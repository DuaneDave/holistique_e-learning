'use client';

import { useState, useEffect, useContext } from 'react';

import { CourseContext } from '@/store/courseContext';
import HeroSection from '@/component/courses/details/HeroSection';
import ModuleDetails from '@/component/courses/details/ModuleDetails';
import Comment from '@/component/courses/details/Comment';
import Comments from '@/component/courses/details/Comments';

function page({ params }) {
  const { course, fetchCourse } = useContext(CourseContext);

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <>
      <HeroSection module={course} activeVideo={activeVideo} />
      <ModuleDetails
        module={course}
        setActiveVideo={setActiveVideo}
        activeVideo={activeVideo}
      />
      <Comment module={course} />
      <Comments module={course} />
    </>
  );
}

export default page;
