import React, { useState } from 'react';
import './style.scss';
import checkmark from '../../assets/check-mark.svg';

const IngredientCard = () => {
  const [clicked, setClick] = useState(false);

  return (
    <div
      className={
        clicked ? 'ingredient-card selected' : 'ingredient-card'
      }
      onClick={() => {
        setClick(!clicked)
      }}
    >
      {clicked && <img alt="check" className="check" src={checkmark}/>}
    </div>
  )
}

export default IngredientCard;