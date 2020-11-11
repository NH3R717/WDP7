"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Videos", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        onDelete: "CASCADE",
      },
      notificationId: {
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        onDelete: 'SET NULL',
        references: {
          model: "Notifications",
          key: "id",
        },
      },
      videoLink1: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      videoLink2: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn("Notifications", "videosId");
    await queryInterface.dropTable("Videos");
  },
};
