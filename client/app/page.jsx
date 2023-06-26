import styles from './page.module.css';

import HeroSection from '@/component/homepage/HeroSection';
import CardSection from '@/component/homepage/CardSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CardSection />
    </>
  );
}
