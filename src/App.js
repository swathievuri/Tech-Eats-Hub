import React, { useState } from 'react';
import Header from './Header';
import PageMain from './PageMain';
import menuData from './menuData';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const getMenuItems = () => {
    if (selectedCategory === 'all') {
      return [...menuData.breakfast, ...menuData.lunch, ...menuData.snacks, ...menuData.dinner];
    } else {
      return menuData[selectedCategory];
    }
  };

  const mainCategories = ['breakfast', 'lunch', 'snacks', 'dinner'];

  return (
    <div>
      <Header
        categories={[...mainCategories]}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <PageMain items={getMenuItems()} />
    </div>
  );
};

export default App;
