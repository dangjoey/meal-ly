import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import './style.scss';
import HomePage from './containers/HomePage';
import LandingPage from './components/LandingPage';
import RecipePage from './containers/RecipePage';
import IngredientsPage from './containers/IngredientsPage';

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
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);