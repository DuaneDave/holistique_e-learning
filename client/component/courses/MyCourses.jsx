'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import right from '@public/assets/icons/chevron_right.png';
import { Card } from '@/component/ui/Cards';

import coursesProgress from '@/utils/courses';

import styles from './courses.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

function MyCourses() {
  return (
    <section className={styles.coursesContainer}>
      <div className={`container ${styles.courses}`}>
        <h2>Welcome back, ready to continue learning?</h2>

        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            breakpoints={{
              280: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              nextEl: '.next',
              prevEl: '.prev',
              disabledClass: 'disabled',
              clickable: true,
            }}
          >
            {coursesProgress.map((course) => (
              <SwiperSlide key={course.id}>
                <Card className={styles.card}>
                  <Image
                    src={course.course_image}
                    alt={course.title}
                    title={course.title}
                    className="full-width full-height"
                  />

                  <div className={styles.cardContent}>
                    <h3>{course.title}</h3>

                    <span className="flex align-y">
                      <Image src={course.author_image} alt="author" />
                      {course.author}
                    </span>

                    <div className={`flex flex-col ${styles.courseProgress}`}>
                      <span
                        className={`flex align-y full-width ${styles.progressBar}`}
                      >
                        <span
                          style={{
                            width: `${
                              (course.completed_lessons /
                                course.total_lessons) *
                              100
                            }%`,
                          }}
                        ></span>
                      </span>
                      <p>
                        Lesson {course.completed_lessons} of{' '}
                        {course.total_lessons}
                      </p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
            <div
              aria-label="slide controller"
              className={`flex gap ${styles.slideControl}`}
            >
              <div aria-label="previous" className="prev flex center">
                <Image src={right} alt="arrow-back" />
              </div>

              <div aria-label="next" className="next flex center">
                <Image src={right} alt="arrow-back" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default MyCourses;
