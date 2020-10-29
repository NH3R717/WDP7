"use strict";
module.exports = {
  up: async (queryInterface, Sequelize, Users) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      // id: {
      //   type: Sequelize.UUID,
      // },
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      position: {
        type: Sequelize.ENUM("technician", "management", "admin"),
      },
      about: {
        type: Sequelize.STRING,
      },
      avatar: {
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
    Users.associate = function (models) {
      // associations can be defined here
      Users.hasMany(models.Notifications, {
        foreignKey: "username",
      });
    };
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
