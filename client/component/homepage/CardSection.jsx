'use client';

import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { AuthContext } from '@/store/authContext';

import DisplayCard from '../ui/Cards';

import cardDetails from '@utils/homepageCards';

import headeStyle from '@public/assets/design/heading style.png';

import styles from './homepage.module.css';

function CardSection() {
  const { user } = useContext(AuthContext);

  return (
    <section className={styles.cardSection}>
      <div className={`container flex flex-col ${styles.cardContainer}`}>
        {cardDetails.map((card) => (
          <DisplayCard
            key={card.id}
            className={`grid grid-2 gap-lg ${styles.card}`}
          >
            <Image
              src={card.img}
              alt={card.heading1 + ' ' + card.heading2}
              title={card.heading1 + ' ' + card.heading2}
              className="full-width full-height"
            />

            <div>
              <Image
                src={headeStyle}
                alt="heading style"
                aria-hidden="true"
                height={80}
                width={80}
              />
              <h2>
                {card.heading1}
                <span> {card.heading2}</span>
              </h2>
              <p>
                {card.description}

                <button>
                  <Link href={user ? `/info/${card.id}` : `/login`}>
                    Learn More
                  </Link>
                </button>
              </p>
            </div>
          </DisplayCard>
        ))}
      </div>
    </section>
  );
}

export default CardSection;
