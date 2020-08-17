const router = require('express').Router();
const { userRegistration } = require('../controller/signup');

router.post('/signup/user', userRegistration);

module.exports = router;
