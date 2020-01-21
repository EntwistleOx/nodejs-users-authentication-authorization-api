'use strict';
module.exports = (sequelize, DataTypes) => {
  const PermissionRole = sequelize.define('PermissionRole', {
    permissionId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {});
  PermissionRole.associate = function(models) {
    // associations can be defined here
  };
  return PermissionRole;
};