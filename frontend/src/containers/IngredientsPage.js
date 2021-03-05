import React, { useEffect, useState} from 'react';
import {
  useLocation
} from "react-router-dom";

import IngredientHeader from '../components/IngredientHeader';
import IngredientsTab from '../components/IngredientsTab';
import RecipeTab from '../components/RecipeTab';

const IngredientsPage = (props) => {
  const [showIngredients, toggleIngredients] = useState(true);

  const [name, setName] = useState('');
  const [instructions, setInstructions] = useState([]);
  let location = useLocation();

  useEffect(() => {
    let search = location.search.substring(1);
    let idString = search.substring(0, search.indexOf(','));
    setName((search.substring(search.indexOf(',') + 1)).replaceAll("%20", " "));
    fetch(`https://backend-server-recipieze.herokuapp.com/api/instructions?id=${idString}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
    .then(data => {
      setInstructions(data[0].steps);
      console.log(data);
    })
  }, [location.search]);


  return (
    <>
      <IngredientHeader name={name} toggleIngredients={(boolean) => {
        toggleIngredients(boolean)
      }}
      showIngredients={showIngredients}
      image={props.imageSrc}
      />
      {showIngredients ? <IngredientsTab missingIngredients={props.missingIngredients} remainingIngredients={props.remainingIngredients}/> : <RecipeTab instructions={instructions}/>}
    </>
  )
}

export default IngredientsPage;