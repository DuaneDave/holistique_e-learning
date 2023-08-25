import React from 'react';

import HomeDetails from '@/component/homepage/HomeDetails';

import cardDetails from '@utils/homepageCards';

function page({ params }) {
  const { id } = params;

  const card = cardDetails.find((card) => card.id === +id);

  return (
    <>
      <HomeDetails item={card} />
    </>
  );
}

export default page;
