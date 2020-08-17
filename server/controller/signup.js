const bcrypt = require('bcryptjs');
//const Person = require('../server/models/user');
const Person = require('../models/user');
const saltRouds = 12;

exports.userRegistration = (req, res) => {
  const { username, email, password } = req.body;
  if (
    !email ||
    !username ||
    !password ||
  ) {
    res.status(400)
    .send({
      status: false,
      message: 'All fields required',
    });
    return;
  }

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
      res.status(200).send('you registered successfully');
    })
    .catch((err) => console.log(err));
};
