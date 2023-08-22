import React from 'react';
import Image from 'next/image';

import design from '../../public/assets/design/heading style.png';

import styles from './project-background.module.css';

function Description() {
  return (
    <section>
      <div className={`container ${styles.description}`}>
        <Image
          src={design}
          alt="heading style"
          aria-hidden="true"
          width={80}
          height={80}
        />

        <h1>Project Holistique</h1>

        <p>
          In today’s world, health-related stigma and discrimination continue to
          be a major challenge to illness prevention and access to healthcare.
          Certain health conditions such as injection drug use have been known
          to trigger significant stigmatization. People who inject drugs face
          stigma in all aspects of their daily lives and are susceptible to skin
          and soft tissue infections, especially among the homeless population
          as they often lack access to resources to properly take care of their
          health. It is well known that even those providers who provide wound
          care and skin and soft tissue infection services show significant
          stigma towards this population which negatively impacts PWID access to
          health services. <br /> <br /> It is critical that healthcare
          providers are properly equipped to better support the population who
          inject drugs. Healthcare workers should be trained to provide
          stigma-free care so that PWID Commented [SA1]: Please change it, what
          you have is not reflective of the customer design are comfortable
          accessing health services. Over the years, educational interventions
          have proved efficient as a vital component in promoting attitudinal
          change and improving service delivery towards stigmatized groups.
          There is established effectiveness and application of online programs
          to reduce stigma among healthcare workers. Based on these, this
          project aims to develop an online stigma reduction education program
          for healthcare providers working with people who inject drugs. The
          online stigma reduction education program aims to equip healthcare
          providers with the knowledge and skills necessary to reduce stigma
          associated with injection drug use, thereby improving access to skin
          and soft tissue infections support and treatment for people who inject
          drugs.
        </p>
        <hr />
      </div>
    </section>
  );
}

export default Description;
