'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AuthContext } from '@/store/authContext';

import HeroSection from '@/component/resources/HeroSection';
import CardSection from '@/component/resources/CardSection';

function page() {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  if (!user) {
    router.push('/login');

    return null;
  }

  return (
    <>
      <HeroSection />
      <CardSection />
    </>
  );
}

export default page;
