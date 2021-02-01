const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const config = require('../config');

router.get('/findRecipes', (req, res) => {
  const url = new URL('https://api.spoonacular.com/recipes/findByIngredients');

  const params = {
    ingredients: req.query.ingredients, 
    number: 5, limitLicense: true, 
    ranking: 2, ignorePantry: true, 
    apiKey: config.spoonacular_api};

  url.search = new URLSearchParams(params).toString();
  console.log(url);

  fetch(url, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json())
  .then(json => console.log(json));

  //res.send('recipe');
});

module.exports = router;