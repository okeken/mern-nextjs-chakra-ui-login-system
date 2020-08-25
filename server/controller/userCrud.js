const Person = require('../models/user');

const viewAllUsers = async (req, res) => {
  try {
    const result = await Person.find({});
    if (result.length === 0) {
      return res.status(404).json({
        status: false,
        message: 'No user yet',
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      message: 'Users successfully retrieved',
      data: result,
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message:
        'Something happened from our end, our Engineers have been notified!, meanwhile you may try again later',
      data: null,
    });
  }
};

const viewByUsername = (req, res) => {
  const { username } = req.params;
  Person.findOne({ username })
    .then((users) => {
      if (!user) {
        return res.status(404).send('No user exists');
      }
      return res.send(users);
    })
    .catch((e) => {
      res.status(500).send();
    });
};

const viewById = async (req, res) => {
  const { id } = req.params;

  try {
    let result = await Person.findById(id);
    if (result.length === 0) {
      return res.status(404).json({
        status: false,
        message: 'No user found',
        data: null,
      });
    }
    return res.status(200).json({
      status: true,
      message: `${id} found successfully`,
      data: result,
    });
  } catch (e) {
    console.log('error here >>Cornered');
    res.status(500).json({
      status: false,
      message: 'An error occurred',
    });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Person.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({
        status: false,
        message: 'User not found',
      });
    }
    return res.status(200).json({
      status: true,
      message: 'user successfully deleted',
    });
  } catch (e) {
    return res.status(500).json({
      status: false,
      message: 'Something happenend, try again later',
    });
  }
};
module.exports = {
  viewById,
  viewByUsername,
  viewAllUsers,
  deleteUserById,
};
