'use client';

import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';

import styles from './details.module.css';
import 'react-html5video/dist/styles.css';

function HeroSection({ module, activeVideo }) {
  const foundModule = module?.lessons;

  if (!foundModule)
    return (
      <div class="loader flex center">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );

  return (
    <section className={styles.detailsContainer}>
      {foundModule.map(
        (lesson, index) =>
          activeVideo === index && (
            <Video
              className="full-width full-height"
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              onEnded={() => console.log('onEnded')}
              key={lesson._id}
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
