const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const food = require('./routes/food');
const recipes = require('./routes/recipes');
const user = require('./routes/user');
const instructions = require('./routes/instructions');
const nutrition = require('./routes/nutrition');
const config = require('./config');

mongoose.connect(config.mongodb_uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/', (req, res) => res.send("recipeze"));
    
    app.use('/api/recipes', recipes);
    app.use('/api/user', user);
    app.use('/api/food', food);
    app.use('/api/instructions', instructions);
    app.use('/api/nutrition', nutrition);

    app.listen(config.port);
    console.log(`Starting server on port ${config.port}`);
})
.catch((err) => console.log(err));