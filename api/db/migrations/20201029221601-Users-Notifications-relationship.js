"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("Users", "NotificationsId", {
      type: Sequelize.UUID(),
      // type: Sequelize.STRING(),
      references: {
        model: "Notifications",
        key: "id",
      },
    }),
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Users", "NotificationsId");
  },
};
