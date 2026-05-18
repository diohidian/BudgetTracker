'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@example.com',
        password: 'hashedpassword', // sebaiknya pakai bcrypt untuk hash password
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dio',
        email: 'dio@example.com',
        password: 'hashedpassword',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
