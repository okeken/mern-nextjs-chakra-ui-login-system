const router = require('express').Router();
const { verifyToken } = require('../middleware/authJWT');
const { authorize } = require('../middleware/authorize');

const {
  findAllStaff,
  findStaffById,
  findStaffByUsername,
  deleteStaffById,
} = require('../controller/staff');

//Admin role
router.get('/staff', [verifyToken, authorize('admin')], findAllStaff);
router.get('/staff/:id', [verifyToken, authorize('admin')], findStaffById);
router.delete('/staff/:id', [verifyToken, authorize('admin')], deleteStaffById);

module.exports = router;
