'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Navigation } from 'swiper';

import whatsNew from '@/utils/whatsNew';
import { Card } from '@/component/ui/Cards';

import view from '@public/assets/icons/view.png';
import right from '@public/assets/icons/chevron_right.png';

import styles from './project-background.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

function WhatsNew() {
  return (
    <section className={styles.whatsNewContainer}>
      <div className={`container ${styles.whatsNew}`}>
        <h2>What's new</h2>

        <div>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={50}
            breakpoints={{
              280: {
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
            }}
            className="mySwiper specific"
            modules={[Navigation]}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
              disabledClass: 'disabled',
              clickable: true,
            }}
          >
            {whatsNew.map((whatsNew) => (
              <SwiperSlide key={whatsNew.id}>
                <Card className={styles.card}>
                  <Image
                    src={whatsNew.image}
                    alt={whatsNew.title}
                    title={whatsNew.title}
                    className="full-width full-height"
                  />

                  <div>
                    <h3>{whatsNew.title}</h3>
                    <p>{whatsNew.description}</p>

                    <div className="flex">
                      <Link href="/whats-new">Read more</Link>

                      <span
                        aria-label="course views"
                        className="flex align-y gap"
                      >
                        <Image src={view} alt="views" aria-hidden="true" />
                        {whatsNew.views}
                      </span>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}

            <div className={`flex gap ${styles.slideControl}`}>
              <div aria-label="previous" className="circle prev flex center">
                <Image src={right} alt="arrow-back" />
              </div>

              <div aria-label="next" className="circle next flex center">
                <Image src={right} alt="arrow-back" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default WhatsNew;
