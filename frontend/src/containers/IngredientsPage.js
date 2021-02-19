import React, {useState} from 'react';

import IngredientHeader from '../components/IngredientHeader';

const IngredientsPage = (props) => {
  const [showIngredients, toggleIngredients] = useState(true);

  return (
    <IngredientHeader name="Recipe" toggleIngredients={(boolean) => {
      toggleIngredients(boolean)
    }}
    showIngredients={showIngredients}
    />
  )
}

export default IngredientsPage;