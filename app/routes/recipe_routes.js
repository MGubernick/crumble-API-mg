// require the express library
const express = require('express')
const passport = require('passport')
// create a router so our code is more modular
const router = express.Router()
// require movie model
const Recipe = require('./../models/recipe.js')
// require the handle404 middleware, to handle not finding documents
const handle404 = require('./../../lib/custom_errors')

const requireToken = passport.authenticate('bearer', { session: false })



module.exports = router
