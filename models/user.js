'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // association with Role model
    User.belongsToMany(models.Role, {
      through: 'RoleUsers',
      foreignKey: 'userId'
    });
  };

  //Run before update if the password is being updated 
  User.beforeUpdate(async (user) => {
    if(user.changed('password')){
        user.password = await bcrypt.hash(user.password, 10); 
      } 
  });

  //Instance Methods
  User.prototype.checkPassword = async function (password) {
    if (!this.password)
    return false;
    return await bcrypt.compare(password, this.password)
  }

  return User;
};