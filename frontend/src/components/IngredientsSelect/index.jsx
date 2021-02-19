import React from 'react';
import IngredientCard from '../IngredientCard';
import ingredients from '../../assets/ingredients.json';

import './style.scss';

const IngredientsSelect = () => {
  return (
    <div className="grid">
      {Object.keys(ingredients).map((number) => (
        <IngredientCard/>
      ))}
    </div>
  )
}

export default IngredientsSelect;