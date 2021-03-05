import React from 'react';

import './style.scss';
import IngredientTapCard from '../IngredientTapCard';

const IngredientsTab = (props) => {
  return (
    <div className="ingredients-tab">
      <div className="ingredients-grid">
        <h2 className="ingredient-section">Owned</h2>
        {props.remainingIngredients.map((ingredient) => (
          <IngredientTapCard amount={ingredient.amount} disabled={true} name={ingredient.originalName} src={ingredient.image}/>
        ))}
      </div>
      <div className="ingredients-grid">
        <h2 className="ingredient-section">Missing</h2>
        {props.missingIngredients.map((ingredient) => (
          <IngredientTapCard amount={ingredient.amount} disabled={true} name={ingredient.originalName} src={ingredient.image}/>
        ))}
      </div>
    </div>
  )
}

export default IngredientsTab;