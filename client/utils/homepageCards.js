import infection from '@public/assets/images/infection.png';
import stigma from '@public/assets/images/stigma.png';
import harmReduction from '@public/assets/images/harmReduction.png';

const cardDetails = [
  {
    id: 1,
    heading1: 'Skin and soft tissue',
    heading2: 'Infections',
    img: infection,
    description:
      'Skin and soft tissue infections (SSTI) are one of the harms associated with injection drug use. SSTI are diverse in nature and treatment but are commonly experienced among people who inject drugs. SSTI are a mojor source of mobidity and mortality for people who inject drugs. these infections are known to occur at injection sites when pathogenic bacteria such as staphylococcus aureus are introduced into the skin due to contaminated needles....',
    link: 'https://nastad.org/sites/default/files/2023-04/PDF-Wound-Care-And-Triage.pdf',
  },
  {
    id: 2,
    heading1: 'Stigma',
    heading2: 'In health settings',
    img: stigma,
    description:
      'Stigma is a barrier to health seeking behaviors, engagement in care, and treatment adherence among people who inject drugs. Stigma and discrimination in health settings can manifest through negative attitudes such as inappropriate comments, refusal of healthcare and support services, judgmental provider-patient interactions, verbal and physical abuse and breaches of patient confidentiality. Stigma makes it harder for PWID to seek help because of fear of judgment. Stigma also contributes...',
    link: 'https://www.cdc.gov/hepatitis/policy/pdfs/pwid-people-who-inject-drugs-stigma.pdf',
  },
  {
    id: 3,
    heading1: 'Harm',
    heading2: 'Reduction',
    img: harmReduction,
    description:
      'The avoidance of Stigma is a foundational principle  of harm reduction. Harm reduction practitioners accept people who use drugs as they are and are committed to meeting them “where they are” in their lives without judgment. it is critical that those ho support people who inject drugs are properly equipped to better support this population, thereby improving access to skin and soft tissue infection services for...',
    link: 'https://kmb.camh.ca/eenet/news/online-course-reducing-stigma-and-promoting-recovery-opioid-use',
  },
];

export default cardDetails;
