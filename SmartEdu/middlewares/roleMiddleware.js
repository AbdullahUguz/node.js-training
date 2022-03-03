const res = require('express/lib/response');

module.exports = (roles) => {
  return (req, re, next) => {
    const userRole = req.body.role;
    if (roles.includes(userRole)) {
      next();
    } else {
      res.status(401).sen('You cant do it');
    }
  };
};
