import React from 'react';

import MyCourses from '@/component/courses/MyCourses';
import AvailableCourses from '@/component/courses/AvailableCourses';

function Courses() {
  return (
    <>
      <MyCourses />
      <AvailableCourses />
    </>
  );
}

export default Courses;
