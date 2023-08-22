import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { AuthContext } from '@/store/authContext';

import resources from '@public/assets/images/resources.png';

function HeroSection() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  if (!user) router.push('/login');

  return (
    <section className="hero">
      <Image
        src={resources}
        alt="project background"
        aria-hidden="true"
        className="full-width full-height"
      />
    </section>
  );
}

export default HeroSection;
