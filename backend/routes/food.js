const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

router.get('/user/:user_id', (req, res) => {
  Food.find({user: req.params.username})
    .sort({expirationDate: 1})
    .then(food => res.json(food))
    .catch(err => console.log(err));
});

router.post('/addFood', (req, res) => {
  const food = new Food({
    name: req.body.name,
    image: req.body.image,
    quantity: req.body.quantity,
    expirationDate: req.body.expirationDates,
    user: req.body.user
  });

  food.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
});

router.post('/deleteFood', (req, res) => {
  Food.findById(req.body.id)
    .then((food) => {
      if (food.quantity <= req.body.quantity) {
        Food.findByIdAndRemove(req.body.id).exec();
      }
      else {
        Food.findByIdAndUpdate(req.body.id, {'quantity': food.quantity - req.body.quantity}).exec();
      }
      res.send(food);
    })
});

module.exports = router;