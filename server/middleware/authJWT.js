const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  //const token = req.header['x-access-token'];
  const token = req.header('Authorization');
  if (!token)
    return res.status(401).json({
      message: 'Access denied, no token provided',
    });
  try {
    req.user = jwt.verify(token, process.env.jwTSecret);
    next();
  } catch (err) {
    res.status(400).json({
      message: 'Invalid token provided',
    });
  }
};

module.exports = {
  verifyToken,
};
