import React from 'react';

import './style.scss';

const RecipeCard = (props) => {
  return (
    <div className="recipe">
      <h1>Recipe {props.number}</h1>
    </div>
  )
}

export default RecipeCard;