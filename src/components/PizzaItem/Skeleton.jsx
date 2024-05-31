import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb">
    <rect x="0" y="280" rx="0" ry="0" width="280" height="28" />
    <rect x="0" y="328" rx="0" ry="0" width="280" height="88" />
    <rect x="0" y="436" rx="0" ry="0" width="90" height="27" />
    <rect x="128" y="436" rx="0" ry="0" width="152" height="45" />
    <circle cx="141" cy="140" r="120" />
  </ContentLoader>
);
