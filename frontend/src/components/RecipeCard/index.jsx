import React from 'react';
import {
  Link
} from "react-router-dom";

import './style.scss';

const RecipeCard = (props) => {
  return (
    <Link to="/ingredients">
      <div className="recipe">
        <h1>Recipe {props.number}</h1>
      </div>
    </Link>
  )
}

export default RecipeCard;