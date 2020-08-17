const router = require('express').Router();
const { userRegistration } = require('../controller/signup');
const {
  viewById,
  viewAllUsers,
  viewByUsername,
  deleteUserById,
} = require('../controller/userCrud');

router.post('/signup/user', userRegistration);
router.get('/view/users', viewAllUsers);
router.get('/view/users/:id', viewById);
router.get('/view/users/:username', viewByUsername);

router.delete('/view/users', deleteUserById);

module.exports = router;
