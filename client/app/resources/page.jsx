'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AuthContext } from '@/store/authContext';

import HeroSection from '@/component/resources/HeroSection';
import CardSection from '@/component/resources/CardSection';

function Resources() {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  if (!user) return router.push('/login');

  return (
    <>
      <HeroSection />
      <CardSection />
    </>
  );
}

export default Resources;
