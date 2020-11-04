"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Images", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      notificationId: {
        type: Sequelize.UUID,
        onDelete: "CASCADE",
        references: {
          model: "Notifications",
          key: "id",
        },
      },
      imageLink1: {
        type: Sequelize.STRING,
      },
      imageLink2: {
        type: Sequelize.STRING,
      },
      imageLink3: {
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
    // await queryInterface.removeColumn("Notifications", "imagesId");
    await queryInterface.dropTable("Images");
  },
};
