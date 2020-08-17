const bcrypt = require('bcryptjs');
const Person = require('../models/user');
const saltRouds = 12;

exports.userRegistration = (req, res) => {
  const { username, email, password } = req.body;

  (() => {
    !email || !username || !password
      ? res.status(400).json({
          status: false,
          message: 'All fields are required',
        })
      : '';
  })();

  Person.findOne({ username }).then((user) => {
    if (user) {
      return res.status(423).json({
        status: false,
        message: 'username taken, choose another one',
      });
    }
  });
  Person.findOne({ email }).then((user) => {
    if (user) {
      return res.status(423).send({
        status: false,
        message: 'User already exist',
      });
    }
  });
  bcrypt
    .hash(password, saltRouds)
    .then((password) => {
      let newUser = new Person({
        username,
        email,
        password,
      });
      return newUser.save();
    })
    .then(() => {
      res.status(200).json({
        status: true,
        message: 'Registration succeessful, login to proceed',
      });
    })
    .catch((err) => console.log(err));
};
