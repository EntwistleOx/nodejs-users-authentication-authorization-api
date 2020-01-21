'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Permission.associate = function(models) {
    // associations can be defined here
    Permission.belongsToMany(models.Role, {
      through: 'PermissionRoles',
      foreignKey: 'permissionId'
    });
  };
  return Permission;
};