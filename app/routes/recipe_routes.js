// require the express library
const express = require('express')
const passport = require('passport')
// create a router so our code is more modular
const router = express.Router()
// require movie model
const Recipe = require('./../models/recipe.js')
// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')
// require the handle404 middleware, to handle not finding documents
const handle404 = require('./../../lib/custom_errors')
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership
// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')

const requireToken = passport.authenticate('bearer', { session: false })

// CREATE A Recipe
// POST /recipes

router.post('/recipes', requireToken, (req, res, next) => {
  // extract the recipe from the incoming request's data (req.body)
  const recipeData = req.body.recipe
  // add user as a recipe owner
  recipeData.owner = req.user._id
  // create a recipe using the recipeData
  Recipe.create(recipeData)
    .then(recipe => {
      res.status(201).json({ recipe: recipe })
    })
    .catch(next)
})

// IDEX All
// GET /recipes

router.get('/recipes/all', requireToken, (req, res, next) => {
  Recipe.find()
    .populate('owner', '_id email')
    .then(recipe => {
      res.status(200).json({ recipe: recipe })
    })
    .catch(next)
})

// INDEX for individual user
// GET /recipes

router.get('/recipes', requireToken, (req, res, next) => {
  // find the recipes that coorilate with the specific owner
  Recipe.find({ owner: req.user._id })
  // populate the owner field with only the id and email
    .populate('owner', '_id email')
    .then(recipe => {
      res.status(200).json({ recipe: recipe })
    })
    .catch(next)
})

// SHOW (one recipe owned by user - will then allow update)
// GET /recipes/any/:id

router.get('/recipes/:id', requireToken, (req, res, next) => {
  // get the id
  const id = req.params.id
  // find the one recipe based on the id & owner (should only find recipes by this user)
  Recipe.findOne({ _id: id, owner: req.user._id })
  // populate the owner field with the id and email only
    .populate('owner', '_id email')
    // handle any 404 erros
    .then(handle404)
    .then(recipe => {
      res.status(200).json({ recipe: recipe })
    })
    .catch(next)
})

// SHOW (one recipe owned by anyone - will not allow update)
// GET/recipes/:id
router.get('/recipes/any/:id', requireToken, (req, res, next) => {
  // get the id
  const id = req.params.id
  // find the one recipe based on the id & owner (should only find recipes by this user)
  Recipe.findOne({ _id: id })
  // populate the owner field with the id and email only
    .populate('owner', '_id email')
    // handle any 404 erros
    .then(handle404)
    .then(recipe => {
      res.status(200).json({ recipe: recipe })
    })
    .catch(next)
})

// UPDATE
// PATCH /recipes/:id

router.patch('/recipes/:id', requireToken, removeBlanks, (req, res, next) => {
  // get id
  const id = req.params.id
  // get data from req - call it recipeData
  const recipeData = req.body.recipe
  // remove the owner so that people cannot update the owner
  delete req.body.recipe.owner

  // find the recipe you want to update
  Recipe.findById(id)
  // handle any 404 errors if there is a problem with the ID
    .then(handle404)
    // update the one recipe based on the new recipeData submitted
    .then(recipe => {
      requireOwnership(req, recipe)

      return recipe.updateOne(recipeData)
    })
    .then(recipe => {
      res.status(200).json({ recipe: recipeData })
    })
    .catch(next)
})

// DELETE
// DELETE /recipes/:id

router.delete('/recipes/:id', requireToken, (req, res, next) => {
  // get the id
  const id = req.params.id

  // find the recipe to delete using the id and owner (can only delete something the user owns)
  Recipe.findOne({ _id: id, owner: req.user._id })
  // handle any 404 errors caused by a bad id
    .then(handle404)
    // delete the recipe indicated if the id and owner are good
    .then(recipe => {
      recipe.deleteOne()
    })
    .then(() => {
      res.sendStatus(204)
    })
    .catch(next)
})

module.exports = router
