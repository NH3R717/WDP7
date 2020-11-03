"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("Notifications", "videosId", {
      type: Sequelize.UUID(),
      // type: Sequelize.STRING(),
      references: {
        model: "Videos",
        key: "id",
      },
    }),
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Notifications", "videosId");
  },
};
