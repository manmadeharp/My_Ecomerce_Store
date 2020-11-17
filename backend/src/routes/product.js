const express = require('express');
const Category = require('../models/category');
const slugify = require('slugify')
// const {addCategory, getCategory} = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../middleware');
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid')
const path = require('path');



const Product = require('../models/product');
const { createProduct, getProductsBySlug } = require('../controller/product');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uploads'))
  },

  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' + file.originalname)
  }
})


var upload = multer({ storage })

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProduct,)
router.get('/products/:slug', getProductsBySlug)
// router.get('/category/getcategory', getCategory)

module.exports = router