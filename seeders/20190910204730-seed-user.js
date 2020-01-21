'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Juan Diaz', 
        username: 'juandiaz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.name.firstName() + ' ' + faker.name.lastName(), 
        username: faker.name.firstName().toLowerCase() + faker.name.lastName().toLowerCase(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.name.firstName() + ' ' + faker.name.lastName(), 
        username: faker.name.firstName().toLowerCase() + faker.name.lastName().toLowerCase(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.name.firstName() + ' ' + faker.name.lastName(), 
        username: faker.name.firstName().toLowerCase() + faker.name.lastName().toLowerCase(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.name.firstName() + ' ' + faker.name.lastName(), 
        username: faker.name.firstName().toLowerCase() + faker.name.lastName().toLowerCase(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
