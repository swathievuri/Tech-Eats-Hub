import React from 'react';

const FoodItem = ({ name, description, image }) => {
  return (
    <div>
      <div style={{height: '200px', overflow: 'hidden'}}>
      <img src={image} alt={name} style={{ width: '100%'}} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FoodItem;
