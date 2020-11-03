"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("Notifications", "notificationsTextsId", {
      type: Sequelize.UUID(),
      // type: Sequelize.STRING(),
      references: {
        model: "NotificationsTexts",
        key: "id",
      },
    }),
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Notifications", "notificationsId");
  },
};
