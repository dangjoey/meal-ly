import React from 'react';

import './style.scss';
import IngredientTapCard from '../IngredientTapCard';

const IngredientsTab = () => {

  let nums = [];

  for (let i = 0; i < 5; i++) {
    nums.push(i + 1);
  }
  return (
    <div className="ingredients-tab">
      <div className="ingredients-grid">
        <h2 className="ingredient-section">Owned</h2>
        {nums.map((num) => (
          <IngredientTapCard amount="200g" disabled={true} name="test"/>
        ))}
      </div>
      <div className="ingredients-grid">
        <h2 className="ingredient-section">Missing</h2>
        {nums.map((num) => (
          <IngredientTapCard amount="200g" disabled={true} name="test"/>
        ))}
      </div>
    </div>
  )
}

export default IngredientsTab;