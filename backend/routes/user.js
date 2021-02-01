const express = require('express');
const router = express.Router();
const User = require('./../models/User');

router.post('/register', (req, res) => {

  const user = new User({
    username: req.body.username,
    password: req.body.password
  })
  
  user.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({'username': username, 'password': password}, 'username')
  .then((user) => {
    console.log(user.id);
  })
});

module.exports = router;