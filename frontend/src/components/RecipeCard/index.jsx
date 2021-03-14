import React from 'react';
import {
  Link
} from "react-router-dom";
import next from '../../assets/next.svg'

import './style.scss';

const RecipeCard = (props) => {
  return (
    <div className="recipe-card" onClick={props.onClick}>
      <Link to="/ingredients">
        <img alt="recipe" className="recipe" src={props.image}/>
        <div className="recipe-content">
          <h1>{props.name}</h1>
          <h2>{props.usedIngredients} / {props.missingIngredients + props.usedIngredients} ingredients</h2>
          <img alt="next" className="next" src={next}/>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCard;