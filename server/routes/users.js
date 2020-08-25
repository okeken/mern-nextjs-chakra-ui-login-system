const router = require('express').Router();
const { userRegistration } = require('../controller/signup');
const {
  viewById,
  viewAllUsers,
  viewByUsername,
  deleteUserById,
} = require('../controller/userCrud');

router.post('/signup', userRegistration);
router.get('', viewAllUsers);
router.get('/:id', viewById);
router.get('/:username', viewByUsername);
router.delete('/:id', deleteUserById);

module.exports = router;
