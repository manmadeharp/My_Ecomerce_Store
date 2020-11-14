const express = require('express');
const { signup, signin, requireSignin } = require('../../controller/admin/auth');
const { validateSignInRequest, isRequestValidated, validateSignUpRequest } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signup', validateSignUpRequest, isRequestValidated, signup);
router.post('/admin/signin', validateSignInRequest, isRequestValidated, signin);


module.exports = router;