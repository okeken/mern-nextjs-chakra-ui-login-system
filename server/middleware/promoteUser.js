const Person = require('../models/user');

const makeStaff = async (req, res, next) => {
  const { _id } = req.user;
  const user = await Person.findById(_id);
  if (user.role === 'staff')
    return res.status(400).json('User is already a staff');
  if (user.role !== 'user')
    return res.status(400).json('User must be a user first');

  try {
    const updatedUser = await Person.findByIdAndUpdate(
      _id,
      {
        $set: { role: 'staff' },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      status: true,
      message: 'User role updated successfully',
      data: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: 'Unable to update User role',
    });

    //  return next();
  }
};

const makeAdmin = async (req, res, next) => {
  const { _id } = req.user;
  const user = await Person.findById(_id);
  if (user.role === 'admin')
    return res.status(400).json('User is already an Admin');

  const users = await Person.find({ role: 'damin' });
  if (users.length > 2)
    return res.status(400).json('Only two Admins can exist');

  try {
    const updatedUser = await Person.findByIdAndUpdate(
      _id,
      {
        $set: { role: 'admin' },
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      status: true,
      message: 'User role updated successfully',
      data: updatedUser,
    });
  } catch (err) {
    return next();
  }
};

module.exports = {
  makeStaff,
  makeAdmin,
};
