"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("Notifications", "imagesId", {
      type: Sequelize.UUID(),
      // type: Sequelize.STRING(),
      references: {
        model: "Images",
        key: "id",
      },
    }),
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Notifications", "imagesId");
  },
};
