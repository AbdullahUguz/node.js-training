// son kullanıcı yetkisi olmayan bi sayfaya yonelirse redirrect etsin   // localhost:3000/users/dashborad
const User = require('../models/User');

module.exports = (req, res, next) => {
  User.findById(req.session.userID, (err, user) => {
    if (err || !user) return res.redirect('/login');
    next();
  });
};