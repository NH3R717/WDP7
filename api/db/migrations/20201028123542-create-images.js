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
        // references: {
        //   model: "Notifications",
        //   key: "imagesId",
        // },
      },
      notificationId: {
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        onDelete: 'SET NULL',
        references: {
          model: "Notifications",
          key: "notificationId",
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
