'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoleUser = sequelize.define('RoleUser', {
    roleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  RoleUser.associate = function(models) {
    // associations can be defined here
  };
  return RoleUser;
};