import React from 'react';

import './style.scss';
import IngredientCard from '../IngredientCard';

const IngredientsTab = () => {

  let nums = [];

  for (let i = 0; i < 5; i++) {
    nums.push(i + 1);
  }
  return (
    <div className="ingredients-tab">
      <div className="grid">
        <h2>OWNED</h2>
        {nums.map((num) => (
          <IngredientCard disabled={true}/>
        ))}
      </div>
      <div className="grid">
        <h2>MISSING</h2>
        {nums.map((num) => (
          <IngredientCard disabled={true}/>
        ))}
      </div>
    </div>
  )
}

export default IngredientsTab;