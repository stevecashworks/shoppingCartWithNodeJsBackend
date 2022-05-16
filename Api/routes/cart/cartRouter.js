 const express = require('express')
 const {addToCart, getCart}= require('./cartController')
const Router= express.Router()
Router.route('/').post(addToCart)
Router.route('/:id').get(getCart)

module.exports=Router
