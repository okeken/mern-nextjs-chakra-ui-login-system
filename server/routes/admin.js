const router = require('express').Router();
const { makeStaff, makeAdmin } = require('../Middleware/promoteUser');
const { verifyToken } = require('../Middleware/authJWT');
const { authorize } = require('../Middleware/authorize');

router.post('/staff', [verifyToken, authorize('user')], makeStaff);
router.post('/admin', [verifyToken, authorize('staff')], makeAdmin);

module.exports = router;
