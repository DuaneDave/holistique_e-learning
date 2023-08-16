import React from 'react';
import Image from 'next/image';
import { BiSolidUserCircle } from 'react-icons/bi';

import socials from '@/utils/socials';
import CourseActions from './CourseActions';

import styles from './details.module.css';

function Comments({ module }) {
  const foundModule = module?.comments;

  if (!foundModule) return null;

  return (
    <section>
      <div className={`container ${styles.commentContainer}`}>
        {foundModule.length > 0 && (
          <>
            <h2>Comments</h2>

            <div className={styles.comments}>
              <ul>
                {module.comments.map((comment) => (
                  <li key={comment._id} className="flex">
                    {comment.user[0].avatar ? (
                      <Image
                        src={comment.user[0].avatar}
                        alt="commentor image"
                      />
                    ) : (
                      <BiSolidUserCircle />
                    )}

                    <div className={`flex flex-col ${styles.commentDetails}`}>
                      <p>{comment.content}</p>

                      <CourseActions
                        comment={comment}
                        className={styles.actions}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      <div className={`container ${styles.commentContainer}`}>
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
