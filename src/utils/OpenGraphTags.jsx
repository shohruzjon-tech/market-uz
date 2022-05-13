import React from 'react';

const OpenGraphTags = () => {
  return <React.Fragment>
      <meta property="og:url" content="https://uzstore.uz" />
      {
      /* thumbnail And title for social media */
    }
      <meta property="og:type" content="website" />
      <meta property="og:title" content="UZSTORE | ONLINE BOZOR" />
      <meta property="og:description" content="O'zbekiston bo'ylab onlayn savdo sotiq va eltuv xizmati bilan shug'illanuvchi tashkilot" />
      <meta property="og:image" content="/assets/images/landing/preview.png" />
    </React.Fragment>;
};

export default OpenGraphTags;