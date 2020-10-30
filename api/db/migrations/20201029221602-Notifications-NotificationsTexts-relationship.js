"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn("Notifications", "NotificationTextsId", {
      type: Sequelize.UUID(),
      // type: Sequelize.STRING(),
      references: {
        model: "NotificationsTexts",
        key: "id",
      },
    }),
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Notifications", "NotificationsId");
  },
};
