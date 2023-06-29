import avatar from '@public/assets/icons/avatar.png';
import course1 from '@public/assets/images/course1.png';
import course2 from '@public/assets/images/course2.png';
import course3 from '@public/assets/images/course3.png';
import course4 from '@public/assets/images/courseAvailable.png';

const coursesProgress = [
  {
    id: 1,
    title: 'Harm reduction principles',
    total_lessons: 7,
    completed_lessons: 5,
    course_image: course1,
    author_image: avatar,
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'Stigma reduction',
    total_lessons: 4,
    completed_lessons: 2,
    course_image: course2,
    author_image: avatar,
    author: 'John Doe',
  },
  {
    id: 3,
    title: 'Skin and soft tissue',
    total_lessons: 6,
    completed_lessons: 5,
    course_image: course3,
    author_image: avatar,
    author: 'John Doe',
  },
];

export const availableModule = [
  {
    id: 1,
    title: 'Stigma and discrimination in healthcare settings',
    module_count: 'Nine lessons contained in this module',
    duration: '1hr 45mins',
    module_image: course4,
  },
  {
    id: 2,
    title: 'Skin and soft tissue infections',
    module_count: 'Six lessons contained in this module',
    duration: '1hr 15mins',
    module_image: course3,
  },
  {
    id: 3,
    title: 'Harm Reduction',
    module_count: 'Nine lessons contained in this module',
    duration: '1hr 45mins',
    module_image: course1,
  },
  {
    id: 4,
    title: 'Stigma Reduction',
    module_count: 'Nine lessons contained in this module',
    duration: '1hr 15mins',
    module_image: course2,
  },
];

export default coursesProgress;
