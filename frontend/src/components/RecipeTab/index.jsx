import React, { useEffect, useState } from 'react';

import './style.scss';

const RecipeTab = () => {
  const [instructions, setInstructions] = useState([{"name":"","steps":[{"number":1,"step":"Mix flour and salt in basin make a hollow in the centure and drop in the egg. Stir with a wooden spoon and add liquid gradually, until all the flour is worked in. Beat well and add remaining liquid. Melt fat in a shallow dripping tin or four small tins.","ingredients":[{"id":20081,"name":"all purpose flour","localizedName":"all purpose flour","image":"flour.png"},{"id":2047,"name":"salt","localizedName":"salt","image":"salt.jpg"},{"id":1123,"name":"egg","localizedName":"egg","image":"egg.png"}],"equipment":[{"id":404732,"name":"wooden spoon","localizedName":"wooden spoon","image":"wooden-spoon.jpg"}]},{"number":2,"step":"Place in oven until haze appears.","ingredients":[],"equipment":[{"id":404784,"name":"oven","localizedName":"oven","image":"oven.jpg"}]},{"number":3,"step":"Pour the batter into the large tin, or half fill small tins.","ingredients":[],"equipment":[]},{"number":4,"step":"Bake in hot oven (425/F to 450/F, Gas 7 to","ingredients":[],"equipment":[{"id":404784,"name":"oven","localizedName":"oven","image":"oven.jpg"}]},{"number":5,"step":"for about half an hour for a large pudding, 20 minutes for the small puddings.","ingredients":[],"equipment":[],"length":{"number":20,"unit":"minutes"}},{"number":6,"step":"To make a deferent pudding you could add choped onions to the batter or mixed hurbs are good.","ingredients":[{"id":11282,"name":"onion","localizedName":"onion","image":"brown-onion.png"}],"equipment":[]}]}])
  
  const id = "665574";
  
  useEffect(() => {
    // fetch(`http://localhost:5000/api/instructions?id=${id}`, {
    //   method: 'get',
    //   headers: { 'Content-Type': 'application/json' },
    // }).then(response => response.json())
    // .then(data => {
    //   setInstructions(data);
    //   console.lg(data);
    // })
  }, []);

  return (
    <div className="recipe-tab">
      {instructions[0].steps.map((instruction) => (
      <div className="recipe-list">
        <h1 className="step-number">{instruction.number}</h1>
        <p>{instruction.step}</p>
      </div>
          ))}
    </div>
  )
}

export default RecipeTab;