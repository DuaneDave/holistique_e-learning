import React from 'react';

import MyCourses from '@/component/courses/MyCourses';
import AvailableCourses from '@/component/courses/AvailableCourses';
import Faq from '@/component/courses/Faq';

function Page() {
  return (
    <>
      <MyCourses />
      <AvailableCourses />
      <Faq />
    </>
  );
}

export default Page;
