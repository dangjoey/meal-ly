import React from 'react';
import check from '../../assets/check.svg';
import './style.scss';

const RecipeHeader = () => (
  <div className="recipe-header">
    <img alt="check" className="check" src={check}/>
    <h1> Recipe Results! </h1>
    <p>Recipes that include one or more of the ingredients you entered.</p>
  </div>
)

export default RecipeHeader;