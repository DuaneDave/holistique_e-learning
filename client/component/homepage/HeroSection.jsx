'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import slide1 from '../../public/assets/images/slide1.png';
import slide2 from '../../public/assets/images/slide2.png';
import slide3 from '../../public/assets/images/slide3.png';

import styles from './homepage.module.css';

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const handleSlideChangeId = setInterval(() => {
      if (activeSlide > 2) {
        setActiveSlide(1);
        return;
      }
      if (activeSlide <= 0) {
        setActiveSlide(3);
        return;
      }
      setActiveSlide((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(handleSlideChangeId);
  }, [activeSlide]);

  return (
    <section>
      <div className={` ${styles.heroContainer}`}>
        <div className={`full-width full-height ${styles.heroBackground}`}>
          <Image
            className={`full-width full-height ${
              activeSlide === 1 ? styles.slideActive : ''
            }`}
            src={slide1}
            alt="slide1"
            aria-hidden="true"
          />
          <Image
            className={`full-width full-height ${
              activeSlide === 2 ? styles.slideActive : ''
            }`}
            src={slide2}
            alt=""
            aria-hidden="true"
          />
          <Image
            className={`full-width full-height ${
              activeSlide === 3 ? styles.slideActive : ''
            }`}
            src={slide3}
            alt=""
            aria-hidden="true"
          />
        </div>

        <div
          className={`container full-width full-height flex flex-col align-x ${styles.heroContent}`}
        >
          <h1 className={`${activeSlide === 1 ? styles.activeText : ''}`}>
            <span>BETTER SUPPORT</span> FOR SKIN AND <br />
            SOFT SKIN INFECTIONS FOR <br /> PEOPLE WHO <span>INJECT DRUGS</span>
          </h1>

          <h1 className={`${activeSlide === 2 ? styles.activeText : ''}`}>
            <span>RESOURCES</span> FOR THOSE WHO <br /> <span>SUPPORT</span>
            PEOPLE WHO INJECT <br />
            <span>DRUGS</span>
          </h1>
          <h1 className={`${activeSlide === 3 ? styles.activeText : ''}`}>
            <span>FREE ONLINE TRAINING</span> FOR HEALTH <br /> CARE PROVIDERS
            WHO <span>SUPPORT</span>
            <br /> PEOPLE WHO INJECT <span>DRUGS</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
