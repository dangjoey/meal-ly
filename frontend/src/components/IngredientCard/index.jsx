import React, { useState } from 'react';
import './style.scss';
import checkmark from '../../assets/check-mark.svg';

const IngredientCard = (props) => {
  const [clicked, setClick] = useState(false);

  return (
    <div
      className={
        clicked ? 'ingredient-card selected' : 'ingredient-card'
      }
      onClick={() => {
        if (!props.disabled) {
          setClick(!clicked);
          props.toggleItem(props.ingredient);
        }
      }}
    >
      {clicked && <img alt="check" className="check" src={checkmark}/>}
    </div>
  )
}

export default IngredientCard;