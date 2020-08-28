const bcrypt = require('bcryptjs');
const Person = require('../models/user');
const jwt = require('jsonwebtoken');
const saltRouds = 12;

const userSignUp = (req, res) => {
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

const userLogin = (req, res) => {
  const { email, password } = req.body;

  try {
    let result = Person.findOne({ email });

    Person.findOne({ email }).exec((err, user) => {
      if (err)
        return res.status(500).json({
          status: false,
          message: `An error occured, wit the description: ${err}`,
        });

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        });
      }

      const token = jwt.sign({ id: user.id }, process.env.jwTSecret, {
        expiresIn: 86400,
      });

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        accessToken: token,
      });
    });
    if (!result)
      return res.status(404).json({
        status: false,
        message: 'User not found',
      });
  } catch (e) {
    res.status(500).json('Server Error');
    console.log('An error occurred', e);
  }
};

module.exports = {
  userSignUp,
  userLogin,
};
