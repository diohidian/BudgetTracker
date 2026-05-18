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

    await queryInterface.bulkInsert('Transactions', [
      {
        user_id: 1,
        amount: 50000,
        category: 'Food',
        date: new Date('2026-05-01'),
        type: 'Expense',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        amount: 20000,
        category: 'Transport',
        date: new Date('2026-05-02'),
        type: 'Income',
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});
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
