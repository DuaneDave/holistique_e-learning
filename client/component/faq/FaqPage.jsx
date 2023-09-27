'use client';

import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import Link from 'next/link';

import styles from './faq.module.css';

import faqs from '@/utils/faq';

function FaqPage() {
  const [active, setActive] = useState(1);
  return (
    <section>
      <header className={styles.faqHeader}>
        <div className={`flex container align-y`}>
          <Link href="/courses" className="flex center">
            <BsArrowLeft />
          </Link>
          <h1>Frequently Asked Questions</h1>
        </div>
      </header>

      <div className={`grid ${styles.faqBody}`}>
        <aside className={styles.sidebar}>
          <ul>
            {faqs.map((faq) => (
              <li key={faq.id}>
                <button
                  className={active === faq.id ? styles.active : ''}
                  onClick={() => setActive(faq.id)}
                >
                  {faq.question}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className={styles.main}>
          {faqs.map(
            (faq) =>
              active === faq.id && (
                <div key={faq.id}>
                  <h2>{faq.question}</h2>
                  <p>{faq.answer}</p>
                </div>
              )
          )}
        </main>
      </div>
    </section>
  );
}

export default FaqPage;
