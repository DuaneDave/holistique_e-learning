import React from 'react';
import Image from 'next/image';

import like from '@public/assets/icons/like.png';
import socials from '@/utils/socials';
import dislike from '@public/assets/icons/dislike.png';

import styles from './details.module.css';

function Comments({ module }) {
  return (
    <section>
      <div className={`container ${styles.commentContainer}`}>
        <h2>Comments</h2>

        <div className={styles.comments}>
          <ul>
            {module.comments.map((comment) => (
              <li key={comment.id} className="flex">
                <Image src={comment.image} alt="commentor image" />

                <div className={`flex flex-col ${styles.commentDetails}`}>
                  <p>{comment.comment}</p>

                  <div className={`flex gap-lg ${styles.actions}`}>
                    <button className="flex align-y">
                      <Image src={like} alt="like button" />
                      <span>10</span>
                    </button>

                    <button className="flex align-y">
                      <Image src={dislike} alt="dislike button" />
                      <span>2</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={`flex flex-fluid ${styles.cta}`}>
          <h2>JOIN THE COMMUNITY</h2>

          <div>
            <p>Share this course</p>

            <ul className={`flex gap ${styles.socials}`}>
              {socials.map((social) => (
                <li key={social.id}>
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <Image src={social.icon} alt={social.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comments;
