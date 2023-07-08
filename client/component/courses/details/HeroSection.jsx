'use client';

import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';

import styles from './details.module.css';
import 'react-html5video/dist/styles.css';

function HeroSection({ module }) {
  return (
    <section className={styles.detailsContainer}>
      <Video
        className="full-width full-height"
        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
        onEnded={() => console.log('onEnded')}
      >
        <source
          src="https://player.vimeo.com/external/511908120.sd.mp4?s=ad962a4cc6f8454a6870a18f3cce6a5a83097677&profile_id=164&oauth2_token_id=57447761"
          type="video/webm"
          className="full-width full-height"
        />
      </Video>
    </section>
  );
}

export default HeroSection;
