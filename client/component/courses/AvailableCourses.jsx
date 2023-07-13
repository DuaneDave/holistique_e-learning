import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrStar } from 'react-icons/gr';

import getCourses from '@/serverProps/getCourse';
import { Card } from '../ui/Cards';
import design from '@public/assets/design/heading style.png';

import styles from './courses.module.css';

async function AvailableCourses() {
  const courses = await getCourses();
  return (
    <section className={`container ${styles.availableModule}`}>
      <Image src={design} alt="design" aria-hidden="true" />
      <h2>Available Modules</h2>

      <div className={`grid ${styles.modules}`}>
        {courses.map((course) => (
          <Card key={module.id} className={styles.module}>
            <Image
              src={course.cover}
              alt={module.title}
              title={module.title}
              className="full-width full-height"
              width={0}
              height={0}
              sizes="100vw"
              style={{borderRadius: 'var(--radius-1)'}}
            />

            <div className={styles.cardContent}>
              <h3>{course.title}</h3>

              <p>{course.total_lessons}</p>
            </div>

            <div className={`flex align-y ${styles.duration}`}>
              <p>Duration: {course.duration}</p>

              <span className="flex align-y">
                Rating:
                <span>
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                </span>
              </span>
            </div>
            <Link href={`/courses/${course._id}`}>VIEW MODULE DETAILS</Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default AvailableCourses;
