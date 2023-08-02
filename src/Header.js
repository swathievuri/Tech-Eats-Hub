import React from 'react';

const Header = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <header style={{margin: '10px 0', textAlign: 'center'}}>
        <h1>Our Menu</h1>
      <button style={{padding: '10px 50px', margin: '20px', background: 'black', border: '0', color: 'white', textTransform: 'capitalize'}} onClick={() => onCategorySelect('all')}>All</button>
      {categories.map((category) => (
        <button style={{padding: '10px 50px', margin: '20px', background: 'black', border: '0', color: 'white', textTransform: 'capitalize'}} key={category} onClick={() => onCategorySelect(category)}>
          {category}
        </button>
      ))}
    </header>
  );
};

export default Header;