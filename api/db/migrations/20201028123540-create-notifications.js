"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Notifications", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      // notificationId: Sequelize.STRING,
      notificationId: {
        type: Sequelize.STRING,
        // defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      usersId: {
        type: Sequelize.STRING,
      },
      flags: {
        type: Sequelize.STRING,
      },
      notificationsTextsId: {
        type: Sequelize.STRING,
        unique: true,
        onUpdate: "CASCADE",
        onDelete: 'SET NULL',
        references: {
          model: "notificationsTexts",
          key: "notificationsTextsId",
        },
      },
      imagesId: {
        type: Sequelize.STRING,
        unique: true,
        onUpdate: "CASCADE",
        onDelete: 'SET NULL',
        references: {
          model: "images",
          key: "imagesId",
        },
      },
      audiosId: {
        type: Sequelize.STRING,
        unique: true,
        onUpdate: "CASCADE",
        onDelete: 'SET NULL',
        references: {
          model: "audios",
          key: "audiosId",
        },
      },
      videosId: {
        type: Sequelize.STRING,
        unique: true,
        onUpdate: "CASCADE",
        onDelete: 'SET NULL',
        references: {
          model: "videos",
          key: "videosId",
        },
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
    // Notifications.associate = function (models) {
    //   // associations can be defined here
    //   Task.belongsTo(models.Users, {
    //     foreignKey: "username",
    //     onDelete: "CASCADE",
    //   });
    // };
  },
  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn("Users", "notificationsId");
    await queryInterface.dropTable("Notifications");
  },
};
