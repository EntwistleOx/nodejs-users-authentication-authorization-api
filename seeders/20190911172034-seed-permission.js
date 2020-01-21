'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permissions', [
      //Admin panel
      {
        name: 'Navegar administracion', 
        slug: 'administration.index',
        description: 'Panel de administracion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Users
      {
        name: 'Navegar usuarios',
        slug: 'users.index',
        description: 'Lista todos los usuarios del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Formulario crear usuarios',
        slug: 'users.create',
        description: 'Ver formulario de crear usuarios',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crear usuarios',
        slug: 'users.store',
        description: 'Crear un usuario dentro del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ver detalle de usuario',
        slug: 'users.show',
        description: 'Ver detalle de un usuario en particular',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Formulario editar usuarios',
        slug: 'users.edit',
        description: 'Ver formulario de editar usuario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Editar usuarios',
        slug: 'users.update',
        description: 'Editar datos de un usuario en particular',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Eliminar usuario',
        slug: 'users.destroy',
        description: 'Elimina un usuario del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      //Roles
      {
        name: 'Navegar roles',
        slug: 'roles.index',
        description: 'Lista todos los roles del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Formulario crear rol',
        slug: 'roles.create',
        description: 'Ver formulario para crear roles',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crear rol',
        slug: 'roles.store',
        description: 'Crear un rol dentro del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ver detalle de un rol',
        slug: 'roles.show',
        description: 'Ver detalle de un rol en particular',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Formulario editar roles',
        slug: 'roles.edit',
        description: 'Ver formulario de editar roles',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Editar roles',
        slug: 'roles.update',
        description: 'Editar datos de un rol en particular',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Eliminar rol',
        slug: 'roles.destroy',
        description: 'Elimina un rol del sistema',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permissions', null, {});
  }
};
