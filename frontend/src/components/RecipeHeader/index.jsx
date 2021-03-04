import React from 'react';
import {
  Link
} from "react-router-dom";
import back from '../../assets/back.svg'
import './style.scss';

const RecipeHeader = () => (
  <div className="recipe-header">
    <Link to="/home">
        <img alt="back" className="back" src={back}/>
      </Link>
      <h1><span className="underline">Reco</span>mmended</h1>
      <h2 className="description">recipes that include more than one ingredients you entered</h2>
  </div>
)

export default RecipeHeader;