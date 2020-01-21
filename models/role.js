'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    special: DataTypes.ENUM('all-access','no-access')
  }, {});
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      through: 'RoleUsers',
      foreignKey: 'roleId'
    });
    Role.belongsToMany(models.Permission, {
      through: 'PermissionRoles',
      foreignKey: 'roleId'
    });
  };
  return Role;
};