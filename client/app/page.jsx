import styles from './page.module.css';

import HeroSection from '@/component/homepage/HeroSection';
import CardSection from '@/component/homepage/CardSection';
import FUR from '@/component/homepage/FUR';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CardSection />
      <FUR />
    </>
  );
}
