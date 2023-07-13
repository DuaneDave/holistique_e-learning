'use client';

import { useState } from 'react';

import styles from './details.module.css';

function ModuleDetails({ module, setActiveVideo, activeVideo }) {
  const [isLessonOpen, setIsLessonOpen] = useState(true);

  const foundModule = module?.lessons;

  if (!foundModule) return null;

  return (
    <section className={styles.moduleDetails}>
      <div className={`container ${styles.controls}`}>
        <div className={`flex gap-lg`}>
          <button onClick={() => setIsLessonOpen(false)}>Transcript</button>
          <button onClick={() => setIsLessonOpen(true)}>Overview</button>
        </div>

        <div className={styles.moduleDescription}>
          <h1>
            Module One: Identifying Stigma and discrimination in healthcare
            settings
          </h1>

          <p>
            Course Duration: <span> 1hr45mins</span>
          </p>
        </div>
      </div>

      <div className={isLessonOpen ? styles.lessonsBg : styles.spacing}>
        {isLessonOpen && (
          <ul className="container">
            {foundModule.map((lesson, index) => (
              <li
                key={lesson._id}
                className={`flex ${styles.lesson} ${
                  activeVideo === lesson.id && styles.active
                }`}
                onClick={() => setActiveVideo(index)}
              >
                <p>
                  {lesson.title}: {lesson.course}
                </p>

                <p>{lesson.duration}</p>
              </li>
            ))}
            {/* <li className={`flex ${styles.lesson}`}>
              <p>Assessment</p>
              <p>{module.assessment.duration}</p>
            </li> */}
          </ul>
        )}

        {!isLessonOpen && (
          <div className={`container flex center ${styles.transcript}`}>
            {module.transcript ? (
              <p>{module.transcript}</p>
            ) : (
              <p
                style={{
                  fontSize: 'clamp(2rem, 4vw, 4rem)',
                  color: '#ccc',
                }}
              >
                No transcript available
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ModuleDetails;
