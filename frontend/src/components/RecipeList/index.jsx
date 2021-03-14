import React, { useEffect, useState } from 'react';
import {
  useHistory
} from "react-router-dom";
import {
  useLocation
} from "react-router-dom";
import RecipeCard from '../RecipeCard';

import './style.scss';

const RecipeList = (props) => {
  const history = useHistory();

  const submitId = (id, name, imageSrc, missingIngredients, remainingIngredients) => {
    props.setImageSrc(imageSrc);
    props.setMissingIngredients(missingIngredients);
    props.setRemainingIngredients(remainingIngredients);

    const idString = id + ',' + name;
    history.push({
      pathname: "/ingredients",
      search: `${idString}`
    });
  }

const [recipes, setRecipes] = useState([])
let location = useLocation();
props.setSearchLink(location.search.substring(1));
console.log('test:' + location.search.substring(1));
useEffect(() => {
  fetch(`https://backend-server-recipieze.herokuapp.com/api/recipes/findRecipes?ingredients=${location.search.substring(1)}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json())
  .then(data => {
    setRecipes(data);
    console.log(data);
  })
}, [location.search]);

  return (
    <div className="recipes">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.title}
          onClick={() => {submitId(recipe.id, recipe.title, recipe.image, recipe.missedIngredients, recipe.usedIngredients)}}
          missingIngredients={recipe.missedIngredientCount}
          usedIngredients={recipe.usedIngredientCount}
          likes={recipe.likes}
          image={recipe.image}/>
      ))}
    </div>
  )
}

export default RecipeList;