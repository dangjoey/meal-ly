import React, {useState} from 'react';

import IngredientHeader from '../components/IngredientHeader';
import IngredientsTab from '../components/IngredientsTab';
import RecipeTab from '../components/RecipeTab';

const IngredientsPage = (props) => {
  const [showIngredients, toggleIngredients] = useState(true);

  return (
    <>
      <IngredientHeader name="Recipe" toggleIngredients={(boolean) => {
        toggleIngredients(boolean)
      }}
      showIngredients={showIngredients}
      />
      {showIngredients ? <IngredientsTab /> : <RecipeTab />}
    </>
  )
}

export default IngredientsPage;