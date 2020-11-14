const express = require('express');
const Category = require('../models/category');
const slugify = require('slugify')
const { addItemToCart } = require('../controller/cart');
const { requireSignin, userMiddleware } = require('../middleware');
const router = express.Router();

router.post('/user/cart/add-to-cart', requireSignin, userMiddleware, addItemToCart)

module.exports = router