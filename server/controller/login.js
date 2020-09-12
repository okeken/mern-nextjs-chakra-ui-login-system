const bcrypt = require('bcryptjs');
const Person = require('../models/user');

exports.userLogin = (req, res) => {
  const { email, password } = req.body;

  try {
    let result = Person.findOne({ email });
    if (!result)
      return res.status(404).json({
        status: false,
        message: 'User not found',
      });
    const passwordValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordValid)
      return res.status(401).json({
        accessToken: null,
        message: 'invalid password',
      });

    const token = jwt.sign({ id: user.id }, process.env.jwTSecret, {
      expiresIn: 86400,
    });

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      token: token,
    });
  } catch (e) {
    res.status(500).json('Server Error');
    console.log('An error occurred', e);
  }
};
