require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

module.exports = {
  port: Number(process.env.PORT) || 3000,

  mongodb_uri: process.env.MONGODB_URI,

  spoonacular_api: process.env.SPOONACULAR_API,
}