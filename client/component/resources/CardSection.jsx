import React from 'react';
import Image from 'next/image';

import resources from '@/utils/resources';
import { Card } from '../ui/Cards';

import styles from './resources.module.css';

function CardSection() {
  return (
    <section>
      <div className={`container grid gap-lg ${styles.resources}`}>
        {resources.map((resource) => (
          <Card key={resource.id} className={styles.card}>
            <Image
              src={resource.image}
              alt={resource.title}
              title={resource.title}
              className="full-width full-height"
            />

            <span>
              <a href={resource.link}>{resource.link}</a>
            </span>

            <div className={`flex flex-col ${styles.cardContent}`}>
              <h3 className="text-center">{resource.title}</h3>
              <p>{resource.description}</p>
              <button>Learn more</button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default CardSection;
