const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  boughtDate: {
    type: Date,
    default: Date.now
  },
  expirationDate: {
    type: Date
  },
  image: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;