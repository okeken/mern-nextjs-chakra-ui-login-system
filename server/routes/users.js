const router = require('express').Router();
const { userSignUp, userLogin } = require('../controller/auth');
const {
  viewById,
  viewAllUsers,
  viewByUsername,
  deleteUserById,
  deleteUsers,
} = require('../controller/userCrud');

router.post('/signup', userSignUp);
router.post('/login', userLogin);
router.get('', viewAllUsers);
router.get('/:id', viewById);
router.get('/:username', viewByUsername);
router.delete('/:id', deleteUserById);
router.delete('', deleteUsers);

module.exports = router;
