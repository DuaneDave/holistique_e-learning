'use client';

import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';

import styles from './details.module.css';
import 'react-html5video/dist/styles.css';

function HeroSection({ module, activeVideo }) {
  console.log(activeVideo);

  return (
    <section className={styles.detailsContainer}>
      {module.lessons.map(
        (lesson) =>
          activeVideo === lesson.id && (
            <Video
              className="full-width full-height"
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              onEnded={() => console.log('onEnded')}
            >
              <source
                src={lesson.video}
                type="video/webm"
                className="full-width full-height"
              />
            </Video>
          )
      )}
    </section>
  );
}

export default HeroSection;
