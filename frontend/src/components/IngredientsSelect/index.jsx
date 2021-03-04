import React, { useReducer } from 'react';
import {
  Link
} from "react-router-dom";

import IngredientCard from '../IngredientCard';
import ingredients from '../../assets/ingredients.json';
import CameraModal from '../CameraModal';

import './style.scss';

const initialState = {selectedItems: {}};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setItems':
      return {selectedItems: action.payload};
    default:
      return {}
  }
}

const IngredientsSelect = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enableItem = (itemName) => {
    console.log('what');
    let newItems = {...state.selectedItems};
    newItems[itemName] = {};
    dispatch({type: 'setItems', payload: newItems});
  }

  const toggleItem = (itemName) => {
    let newItems = {...state.selectedItems};
    if (itemName in state.selectedItems) {
      delete newItems[itemName];
    }
    else {
      newItems[itemName] = {};
    }
    dispatch({type: 'setItems', payload: newItems});
  }

  return (
    <div className="ingredients">
      <div className="grid">
        {Object.keys(ingredients).map((name) => {
          if (name.startsWith(props.searchValue.toLowerCase())) {
            if (name in state.selectedItems) {
              return (
                <IngredientCard
                  key={'ingredient' + name}
                  clicked={true}
                  ingredient={name}
                  src={ingredients[name].link}
                  toggleItem={toggleItem}/>
              );
            } else {
                return (
                  <IngredientCard
                  key={'ingredient' + name}
                  clicked={false}
                  ingredient={name}
                  src={ingredients[name].link}
                  toggleItem={toggleItem}/>
                );
            }
          }
          return null;
        })}
        
      </div>
      {Object.keys(state.selectedItems).length >= 1 &&
        <Link to='/recipes'><button className="complete">Done</button></Link>}
      <CameraModal
        closeModal={props.closeModal}
        isModalVisible={props.isModalVisible}
        enableItem={enableItem}
      />
    </div>
  )
}

export default IngredientsSelect;