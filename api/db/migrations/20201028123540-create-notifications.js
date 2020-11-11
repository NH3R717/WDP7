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
      // notificationsTextsId: {
      //   type: Sequelize.UUID,
      //   unique: true,
      //   onUpdate: "CASCADE",
      //   onDelete: 'SET NULL',
      //   references: {
      //     model: "NotificationsTexts",
      //     key: "id",
      //   },
      // },
      // imagesId: {
      //   type: Sequelize.UUID,
      //   unique: true,
      //   onUpdate: "CASCADE",
      //   onDelete: 'SET NULL',
      //   references: {
      //     model: "images",
      //     key: "id",
      //   },
      // },
      // audiosId: {
      //   type: Sequelize.UUID,
      //   unique: true,
      //   onUpdate: "CASCADE",
      //   onDelete: 'SET NULL',
      //   references: {
      //     model: "audios",
      //     key: "id",
      //   },
      // },
      // videosId: {
      //   type: Sequelize.UUID,
      //   unique: true,
      //   onUpdate: "CASCADE",
      //   onDelete: 'SET NULL',
      //   references: {
      //     model: "videos",
      //     key: "id",
      //   },
      // },
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
