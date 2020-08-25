const bcrypt = require('bcryptjs');
const Person = require('../models/user');
const saltRouds = 12;

exports.userlogin = (req, res) => {
  const { email, password } = req.body;

  (() => {
    !email || !password
      ? res.status(400).json({
          status: false,
          message: 'All fields are required',
        })
      : '';
  })();

  Person.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(423).json({
          status: false,
          message: 'Account not found, check and try again',
        });
      }

      //hash password
      bcrypt.compare(password, user.password).then((valid) => {
        if (!valid) {
          return res
            .status(403)
            .send('Incorect password, kindly review details');
        }
      });

      //Generate token when logged in
      const token = jwt.sign(
        { _id: user._id, email: user.email, username: user.username },
        process.env.jwtSecret,
        { expiresIn: '24hrs' }
      );

      res.status(200).send({
        _id: user._id,
        username: user.username,
        email: user.email,
        token,
      });
    })
    .catch((e) => console.log(e));
};
