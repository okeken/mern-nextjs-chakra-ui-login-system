const authorize = (role = []) => {
  if (typeof role === 'string') {
    //Converts an array of role to a string if role provided is one
    role = [role];
  }

  return (req, res, next) => {
    if (role.length && !role.includes(req.user.role)) {
      return res.status(401).json('Unauthorized Resource');
    }
    next();
  };
};

module.exports = {
  authorize,
};
