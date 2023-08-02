import React from 'react';
import FoodItem from './FoodItem';

const PageMain = ({ items }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {items.map((item) => (
          <FoodItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PageMain;
