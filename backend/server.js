const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const recipes = require('./routes/recipes');
const user = require('./routes/user');
const food = require('./routes/food');
const config = require('./config');

mongoose.connect(config.mongodb_uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.use('/api/recipes', recipes);
    app.use('/api/user', user);
    app.use('/api/food', food);

    app.listen(config.port);
    console.log(`Starting server on port ${config.port}`);
})
.catch((err) => console.log(err));