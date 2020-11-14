const express = require('express');
const Category = require('../models/category');
const slugify = require('slugify')
const {addCategory, getCategory} = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../middleware');
const router = express.Router();

router.post('/category/create', requireSignin, adminMiddleware, addCategory)
router.get('/category/getcategory', getCategory)

module.exports = router