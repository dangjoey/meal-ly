import React from 'react';

import './style.scss';

const IngredientHeader = (props) => {
  return (
    <div className="ingredient-header">
      <h1>{props.name}</h1>
      <h3 onClick={() => {
        props.toggleIngredients(true);
      }}
      className={props.showIngredients ? 'underlined' : ''}
      >
        Ingredients
      </h3>
      <h3 onClick={() => {
        props.toggleIngredients(false);
      }}
      className={props.showIngredients ? '' : 'underlined'}
      
      >
        Instructions
      </h3>
    </div>
  )
}

export default IngredientHeader;