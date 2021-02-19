import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";

import IngredientCard from '../IngredientCard';
import ingredients from '../../assets/ingredients.json';

import './style.scss';

const IngredientsSelect = (props) => {
  const [selectedItems, setSelectedItems] = useState({});

  const toggleItem = (itemName) => {
    let newItems = {...selectedItems};
    if (itemName in selectedItems) {
      delete newItems[itemName];
    }
    else {
      newItems[itemName] = {};
    }
    setSelectedItems(newItems);
    console.log(selectedItems);
  }

  return (
    <div className="ingredients">
      <div className="grid">
        {Object.keys(ingredients).map((name) => {
          if (name.startsWith(props.searchValue.toLowerCase())) {
            return (
              <IngredientCard key={'ingredient' + name} ingredient={name} toggleItem={toggleItem}/>
            );
          }
          return null;
        })}
        
      </div>
      {Object.keys(selectedItems).length >= 1 &&
        <Link to='/recipes'><button className="complete">DONE</button></Link>}
    </div>
  )
}

export default IngredientsSelect;