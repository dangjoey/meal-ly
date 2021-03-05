import React from 'react';

import RecipeHeader from '../components/RecipeHeader';
import RecipeList from '../components/RecipeList';

const RecipePage = (props) => {

  return (
    <>
      <RecipeHeader name={props.name}/>
      <RecipeList 
        setImageSrc={props.setImageSrc}
        setMissingIngredients={props.setMissingIngredients}
        setRemainingIngredients={props.setRemainingIngredients}
      />
    </>
  )
}

export default RecipePage;