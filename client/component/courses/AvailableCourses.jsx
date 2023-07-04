import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrStar } from 'react-icons/gr';

import { availableModule } from '@/utils/courses';
import { Card } from '../ui/Cards';
import design from '@public/assets/design/heading style.png';

import styles from './courses.module.css';

function AvailableCourses() {
  return (
    <section className={`container ${styles.availableModule}`}>
      <Image src={design} alt="design" aria-hidden="true" />
      <h2>Available Modules</h2>

      <div className={`grid ${styles.modules}`}>
        {availableModule.map((module) => (
          <Card key={module.id} className={styles.module}>
            <Image
              src={module.module_image}
              alt={module.title}
              title={module.title}
              className="full-width full-height"
            />

            <div className={styles.cardContent}>
              <h3>{module.title}</h3>

              <p>{module.module_count}</p>
            </div>

            <div className={`flex align-y ${styles.duration}`}>
              <p>Duration: {module.duration}</p>

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
            <Link href={`/courses/${module.id}`}>
              VIEW MODULE DETAILS
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default AvailableCourses;
