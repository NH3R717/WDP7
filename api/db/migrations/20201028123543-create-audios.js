"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Audios", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      notificationId: {
        type: Sequelize.UUID,
        onUpdate: "CASCADE",
        onDelete: 'SET NULL',
        references: {
          model: "Notifications",
          key: "id",
        },
      },
      audioLink1: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      audioLink2: {
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
    // await queryInterface.removeColumn("Notifications", "audiosId");
    await queryInterface.dropTable("Audios");
  },
};
