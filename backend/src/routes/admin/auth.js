const express = require('express');
const { signup, signin, logout } = require('../../controller/admin/auth');
const { requireSignin } = require('../../middleware')
const { validateSignInRequest, isRequestValidated, validateSignUpRequest } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signup', validateSignUpRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSignInRequest, isRequestValidated, signin);
router.post('/admin/logout', logout);


module.exports = router;