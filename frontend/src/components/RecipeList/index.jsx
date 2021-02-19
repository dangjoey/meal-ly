import React from 'react';
import RecipeCard from '../RecipeCard';

import './style.scss';

const RecipeList = () => {

let nums = [];

for (let i = 0; i < 5; i++) {
  nums.push(i + 1);
}
  return (
    <div className="recipes">
      {nums.map((num) => (
        <RecipeCard number={num}/>
      ))}
    </div>
  )
}

export default RecipeList;