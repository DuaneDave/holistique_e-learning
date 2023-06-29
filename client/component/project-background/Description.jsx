import React from 'react';
import Image from 'next/image';

import design from '../../public/assets/design/heading style.png';

import styles from './project-background.module.css';

function Description() {
  return (
    <section className={`container ${styles.description}`}>
      <Image
        src={design}
        alt="heading style"
        aria-hidden="true"
        width={80}
        height={80}
      />

      <h1>Project Holistique</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur. Vitae mauris at scelerisque eu
        integer. Maecenas turpis enim leo fringilla in massa. Consequat aenean
        viverra fringilla aliquam duis. Non vel tempor ac nisl duis faucibus sit
        lacinia. Ac quam scelerisque adipiscing hendrerit vitae sed pellentesque
        imperdiet aenean. Ultricies facilisis imperdiet tincidunt sollicitudin
        felis nisl hendrerit. Nisi scelerisque blandit id consectetur lobortis
        cursus. Ipsum feugiat dui in molestie aliquet. Eu odio tellus integer
        orci ultricies integer aliquet scelerisque suspendisse. Tincidunt augue
        dignissim sed neque sit aliquet blandit. Malesuada tempor fermentum nunc
        nibh metus ullamcorper dui. Nulla nulla nunc scelerisque neque mauris.
        Sit nibh rhoncus scelerisque ac tellus nisl arcu nibh velit. In proin
        feugiat id sagittis eget sit interdum. Elementum amet lacus nunc egestas
        interdum. Ullamcorper non ullamcorper congue consequat mollis est
        habitasse. Est nunc nam tortor cras. Maecenas enim bibendum in tincidunt
        tincidunt. Eu ultrices viverra ipsum cras. Facilisis nunc pulvinar ac
        sed aliquam faucibus. Eu viverra eget egestas id eu eget fringilla.
        Aenean mattis donec viverra sed laoreet bibendum malesuada ultricies.
        Pellentesque venenatis eget pharetra scelerisque blandit laoreet lectus.
        In consequat quis cursus et faucibus tempor turpis.
      </p>
      <hr />
    </section>
  );
}

export default Description;
