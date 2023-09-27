import infection from '@public/assets/images/infection.png';
import stigma from '@public/assets/images/stigma.png';
import harmReduction from '@public/assets/images/harmReduction.png';
import hero from '@public/assets/images/hero.webp';

const cardDetails = [
  {
    id: 1,
    heading1: 'Skin and soft tissue',
    heading2: 'Infections',
    img: infection,
    description:
      'Skin and soft tissue infections (SSTI) are one of the harms associated with injection drug use. SSTI are diverse in nature and treatment but are commonly experienced among people who inject drugs. SSTI are a mojor source of mobidity and mortality for people who inject drugs. these infections are known to occur at injection sites when pathogenic bacteria such as staphylococcus aureus are introduced into the skin due to contaminated needles....',
    details: `Skin and soft tissue infections (SSTI) are one of the harms associated with injection drug use. SSTI are diverse in nature and treatment but are a common experience among people who inject drugs. SSTI are a major source of morbidity and mortality for people who inject drugs. These infections are known to occur at recent injection sites when pathogenic bacteria such as Staphylococcus aureus are introduced into the skin due to contaminated needles. A number of behavioral and socioeconomic factors influence the prevalence of SSTI development and the ability to be managed properly. If left untreated a SSTI can pose significant health risks as well as result in mortality. Prevention, early management and treatment via traditional health systems are not readily accessible to people who inject drugs due to stigma and discrimination in health settings`,
    link_title: 'Learn more about SSTI',
    link: '/courses/64e36f299d8809e21599829d',
    hero_image: hero,
  },
  {
    id: 2,
    heading1: 'Stigma',
    heading2: 'In health settings',
    img: stigma,
    description:
      'Stigma is a barrier to health seeking behaviors, engagement in care, and treatment adherence among people who inject drugs. Stigma and discrimination in health settings can manifest through negative attitudes such as inappropriate comments, refusal of healthcare and support services, judgmental provider-patient interactions, verbal and physical abuse and breaches of patient confidentiality. Stigma makes it harder for PWID to seek help because of fear of judgment. Stigma also contributes...',
    details: `Stigma is a barrier to health-seeking behaviors, engagement in care, and treatment adherence among people who inject drugs. Stigma and discrimination in health settings can manifest through negative attitudes such as inappropriate comments, refusal of healthcare and support services, judgmental provider-patient interactions, verbal and physical abuse, and breaches of patient confidentiality. Stigma makes it harder for people who inject drugs to seek help because of factors such as fear of judgment. Stigma also contributes to people who inject drugs receiving a lower quality of care from the healthcare system when they access services.`,
    link_title: 'Learn more about health-related stigma',
    link: '/courses/64e2ab58fa48499c917abe60',
    hero_image: hero,
  },
  {
    id: 3,
    heading1: 'Harm',
    heading2: 'Reduction',
    img: harmReduction,
    description:
      'The avoidance of Stigma is a foundational principle  of harm reduction. Harm reduction practitioners accept people who use drugs as they are and are committed to meeting them “where they are” in their lives without judgment. it is critical that those ho support people who inject drugs are properly equipped to better support this population, thereby improving access to skin and soft tissue infection services for...',
    details: `The avoidance of stigma is a foundational principle of harm reduction. Harm reduction practitioners accept people who use drugs as they are and are committed to meeting them "where they are without judgment”. It is critical that those who support people who inject drugs are properly equipped to better support this population, thereby improving access to skin and soft tissue infection services for this population. `,
    link_title: 'Learn more about harm reduction',
    link: '/courses/64e3741a9d8809e215998304',
    hero_image: hero,
  },
];

export default cardDetails;
