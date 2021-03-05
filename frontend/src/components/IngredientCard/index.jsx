import React from 'react';
import './style.scss';

const IngredientCard = (props) => {

  return (
    <div className="ingredient-card-parent">
      <div
        className={
          props.clicked ? 'ingredient-card selected' : 'ingredient-card'
        }
        style = {{
          backgroundImage: "url(" + props.src + ")"
        }}
        onClick={() => {
          if (!props.disabled) {
            props.toggleItem(props.ingredient);
          }
        }}
      >
      </div>
    </div>
  )
}

export default IngredientCard;