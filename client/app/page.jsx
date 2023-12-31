import styles from './page.module.css';

import HeroSection from '@/component/homepage/HeroSection';
import CardSection from '@/component/homepage/CardSection';
import FURSection from '@/component/homepage/FURSection';
import CtaSection from '@/component/homepage/CtaSection';
import QuoteSection from '@/component/homepage/QuoteSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CardSection />
      <FURSection />
      <CtaSection />
      <QuoteSection />
    </>
  );
}
