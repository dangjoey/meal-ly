import React from 'react';
import {
  Link
} from "react-router-dom";
import back from '../../assets/back.svg'
import user from '../../assets/user.svg'
import './style.scss';

const RecipeHeader = (props) => (
  <div className="recipe-header">
    <Link to="/home">
        <img alt="back" className="back" src={back}/>
    </Link>
    <div className="user">
      <img alt="user" src={user}/>
      <span>{props.name}</span>
    </div> 
    <h1><span className="underline">Reco</span>mmended</h1>
    <h2 className="description">recipes that include more than one ingredients you entered</h2>
  </div>
)

export default RecipeHeader;