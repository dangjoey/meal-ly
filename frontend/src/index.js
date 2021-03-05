import React from 'react';
import ReactDOM from 'react-dom';
import {
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
  apiKey: "AIzaSyATWw6q4CDZi2mpy-4_imoZuS8i3ly-hVo",
  authDomain: "meally-cc30d.firebaseapp.com",
  databaseURL: "https://meally-cc30d-default-rtdb.firebaseio.com",
  projectId: "meally-cc30d",
  storageBucket: "meally-cc30d.appspot.com",
  messagingSenderId: "727966624326",
  appId: "1:727966624326:web:ae5530248afc91ad8e7847",
  measurementId: "G-W5X9QG4TCM"
});
const db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/recipes">
          <RecipePage />
        </Route>
        <Route path="/ingredients">
          <IngredientsPage />
        </Route>
        <Route path="/register">
          <RegisterPage db={db}/>
        </Route>
        <Route path="/">
          <LandingPage db={db} />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);