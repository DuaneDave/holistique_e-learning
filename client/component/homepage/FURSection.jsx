'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrStar, GrStarOutline } from 'react-icons/gr';

import { Card } from '../ui/Cards';
import frequentlyUsedResources from '@/utils/fur';

import ellipse from '@public/assets/design/ellipse.png';
import polygon from '@public/assets/design/polygon.png';

import styles from './homepage.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

function FURSection() {
  return (
    <section>
      <div className={`container ${styles.fur}`}>
        <h2>Frequently used resources</h2>

        <div>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={40}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }}
            className="mySwiper"
          >
            {frequentlyUsedResources.map((fur) => (
              <SwiperSlide key={fur.id}>
                <Card>
                  <Image
                    src={fur.image}
                    alt={fur.title}
                    title={fur.title}
                    className="full-width full-height"
                  />

                  <div className={`grid grid-2 ${styles.content}`}>
                    <div>
                      <h3>{fur.title}</h3>
                      <p>{fur.content}</p>
                    </div>

                    <span className="flex flex-col">
                      <span>
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <GrStar />
                        <GrStar />
                      </span>
                      <Link href="/how-to-use" className="flex center">
                        Explore
                      </Link>
                    </span>
                  </div>

                  <span className={`flex flex-col ${styles.illustration}`}>
                    <Image src={ellipse} alt="ellipse" aria-hidden="true" />
                    <Image src={polygon} alt="polygon" aria-hidden="true" />
                  </span>

                  <div className={styles.box}></div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default FURSection;
