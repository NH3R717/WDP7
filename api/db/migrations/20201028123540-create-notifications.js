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
      notificationId: {
        type: Sequelize.STRING,
        onUpdate: "CASCADE",
        onDelete: 'SET NULL',
        references: {
          model: "Notifications",
          key: "id",
        },
      },
      usersId: {
        type: Sequelize.STRING,
      },
      flags: {
        type: Sequelize.STRING("office", "shop", "field", "all"),
      },
      notificationsTextsId: {
        type: Sequelize.STRING,
        // defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      imagesId: {
        type: Sequelize.STRING,
        // defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      audiosId: {
        type: Sequelize.STRING,
        // defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      videosId: {
        type: Sequelize.STRING,
        // defaultValue: Sequelize.UUIDV4,
        unique: true,
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
