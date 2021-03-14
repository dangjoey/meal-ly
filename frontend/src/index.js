import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  Redirect, 
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore"

import HomePage from './containers/HomePage';
import IngredientsPage from './containers/IngredientsPage';
import LandingPage from './components/LandingPage';
import RecipePage from './containers/RecipePage';
import RegisterPage from './components/RegisterPage';
import './style.scss';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});
const db = firebase.firestore();

const MainComponent = () => {
  const [name, setName] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [missingIngredients, setMissingIngredients] = useState([]);
  const [searchLink, setSearchLink] = useState('');
  const [remainingIngredients, setRemainingIngredients] = useState([]);

  return (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/home">
          { name ? 
          <HomePage name={name} />
          : <Redirect to="/" />}
        </Route>
        <Route path="/recipes">
          {name ? <RecipePage
            name={name}
            setImageSrc={(imageSrcInput) => {
              setImageSrc(imageSrcInput);
            }}
            setMissingIngredients={(missingIngredientsInput) => {
              setMissingIngredients(missingIngredientsInput);
            }}
            setRemainingIngredients={(remainingIngredientsInput) => {
              setRemainingIngredients(remainingIngredientsInput);
            }}
            setSearchLink={(searchLinkInput) => {
              setSearchLink(searchLinkInput);
            }}
            /> : <Redirect to="/" />}
        </Route>
        <Route path="/ingredients">
          {name ? <IngredientsPage
            imageSrc={imageSrc}
            missingIngredients={missingIngredients}
            remainingIngredients={remainingIngredients}
            searchLink={searchLink}
          /> : <Redirect to="/" />}
        </Route>
        <Route path="/register">
          <RegisterPage setName={(nameInput) => {
            console.log(nameInput);
            console.log('hi');
            setName(nameInput);
          }} db={db}/>
        </Route>
        <Route path="/">
          <LandingPage setName={(nameInput) => {
            console.log(nameInput);
            console.log('hi');
            setName(nameInput);
          }} db={db} />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
  )
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById('root')
);