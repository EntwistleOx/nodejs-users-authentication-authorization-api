'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        name: 'Super Administrador', 
        slug: 'superadmin',
        description: 'Administrador con acceso total nivel dios',
        special: 'all-access',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Administrador', 
        slug: 'admin',
        description: faker.lorem.sentence(),
        special: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ejecutivo', 
        slug: 'ejecutivo',
        description: faker.lorem.sentence(),
        special: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Calidad', 
        slug: 'calidad',
        description: faker.lorem.sentence(),
        special: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Supervisor', 
        slug: 'supervisor',
        description: faker.lorem.sentence(),
        special: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reportes', 
        slug: 'reportes',
        description: faker.lorem.sentence(),
        special: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
