import React from 'react';
import {
  Link
} from "react-router-dom";
import back from '../../assets/back.svg'

import './style.scss';

const IngredientHeader = (props) => {
  const link = '/recipes?' + props.searchLink;
  return (
    <>
    <img alt="recipe" className="recipe-image" src={props.image}/>
    <div className="ingredient-header">
      <Link to={link}>
        <img alt="back" className="back" src={back}/>
      </Link>
      <h1>{props.name}</h1>
      <h2>Easy, quick, and delicious!</h2>
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
    </>
  )
}

export default IngredientHeader;