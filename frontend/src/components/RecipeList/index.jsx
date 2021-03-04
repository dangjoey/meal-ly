import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard';

import './style.scss';

const RecipeList = () => {

const [recipes, setRecipes] = useState([{
  id: 665574,
  image: "http://placekitten.com/400/300",
  likes: 1,
  missedIngredientCount: 2,
  title: "Yorkshire Pudding",
  usedIngredientCount: 1
},{
  id: 665574,
  image: "http://placekitten.com/400/300",
  likes: 1,
  missedIngredientCount: 2,
  title: "Yorkshire Pudding",
  usedIngredientCount: 1
},{
  id: 665574,
  image: "http://placekitten.com/400/300",
  likes: 1,
  missedIngredientCount: 2,
  title: "Yorkshire Pudding",
  usedIngredientCount: 1
},{
  id: 665574,
  image: "http://placekitten.com/400/300",
  likes: 1,
  missedIngredientCount: 2,
  title: "Yorkshire Pudding",
  usedIngredientCount: 1
}])

const ingredients = "brocolli,beef";

useEffect(() => {
  /*fetch(`http://localhost:5000/api/recipes/findRecipes?ingredients=${ingredients}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json())
  .then(data => {
    setRecipes(data);
    console.log(data);
  })*/
}, []);

  return (
    <div className="recipes">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          name={recipe.title}
          missingIngredients={recipe.missedIngredientCount}
          usedIngredients={recipe.usedIngredientCount}
          likes={recipe.likes}
          image={recipe.image}/>
      ))}
    </div>
  )
}

export default RecipeList;