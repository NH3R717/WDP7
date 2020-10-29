'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notifications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      posterId: {
        type: Sequelize.STRING
      },
      flags: {
        type: Sequelize.ENUM('office', 'shop', 'field', 'all')
      },
      notificationTextId: {
        type: Sequelize.STRING
      },
      imageId: {
        type: Sequelize.STRING
      },
      audioId: {
        type: Sequelize.STRING
      },
      videoId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Notifications');
  }
};