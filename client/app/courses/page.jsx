import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AuthContext } from '@/store/authContext';

import MyCourses from '@/component/courses/MyCourses';
import AvailableCourses from '@/component/courses/AvailableCourses';
import Faq from '@/component/courses/Faq';

function Page() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (!user) router.push('/login');

  return (
    <>
      <MyCourses />
      <AvailableCourses />
      <Faq />
    </>
  );
}

export default Page;
