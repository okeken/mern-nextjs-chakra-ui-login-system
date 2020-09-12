const router = require('express').Router();
const {
  userSignUp,
  journalistSignUp,
  userLogin,
  //adminSuper,
} = require('../controller/auth');
const {
  viewById,
  viewAllUsers,
  viewByUsername,
  deleteUserById,
  deleteUsers,
} = require('../controller/userCrud');

router.post('/signup', userSignUp);
router.post('/signup/media', journalistSignUp);
//router.post('/signup/adminSuper', adminSuper);
router.post('/login', userLogin);

router.get('', viewAllUsers);
router.get('/:id', viewById);
router.get('/:username', viewByUsername);
router.delete('/:id', deleteUserById);
router.delete('', deleteUsers);

module.exports = router;
