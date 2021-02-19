import React from 'react';
import IngredientCard from '../IngredientCard';
import ingredients from '../../assets/ingredients.json';

import './style.scss';

const IngredientsSelect = (props) => {
  return (
    <div className="grid">
      {Object.keys(ingredients).map((name) => {
        if (name.startsWith(props.searchValue.toLowerCase())) {
          return (
            <IngredientCard key={'ingredient' + name}/>
          );
        }
        return null;
      })}
    </div>
  )
}

export default IngredientsSelect;