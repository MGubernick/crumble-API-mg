const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  cookieType: {
    type: String,
    required: true
  },
  ingredients: [{ type: String }],
  directions: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
