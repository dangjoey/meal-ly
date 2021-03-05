import React from 'react';
import './style.scss';

const RecipeTab = (props) => {

  return (
    <div className="recipe-tab">
      {props.instructions.map((instruction) => (
      <div className="recipe-list">
        <h1 className="step-number">{instruction.number}</h1>
        <p>{instruction.step}</p>
      </div>
          ))}
    </div>
  )
}

export default RecipeTab;