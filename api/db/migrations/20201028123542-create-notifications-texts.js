"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("NotificationsTexts", {
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
      messageText: {
        allowNull: false,
        type: Sequelize.TEXT,
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
    // await queryInterface.removeColumn("Notifications", "notificationsTextsId");
    await queryInterface.dropTable("NotificationsTexts");
  },
};
