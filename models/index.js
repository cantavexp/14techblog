const Techblog = require('./Techblog');
const UserBlog = require('./UserBlog');
const UserLogin = require('./UserLogin');


Techblog.hasOne(UserLogin, {
  foreignKey: 'techblog_id',
});

UserLogin.belongsTo(UserBlog, {
  foreignKey: 'techblog_id',
});

module.exports = { UserLogin, Techblog, UserBlog};