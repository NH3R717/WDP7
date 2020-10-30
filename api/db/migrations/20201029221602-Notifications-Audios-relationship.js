"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("Notifications", "audiosId", {
      type: Sequelize.UUID(),
      // type: Sequelize.STRING(),
      references: {
        model: "Audios",
        key: "id",
      },
    }),
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Notifications", "audiosId");
  },
};
