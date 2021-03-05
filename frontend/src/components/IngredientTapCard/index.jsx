import React from 'react';
import IngredientCard from '../IngredientCard';

import './style.scss';

const IngredientTapCard = (props) => {

  return (
    <div className="tap-card">
      <IngredientCard disabled={true} className="item-card" src={props.src}/>
      <h1>{props.name}</h1>
      <h2>{props.amount}</h2>
    </div>
    
  )
}

export default IngredientTapCard;