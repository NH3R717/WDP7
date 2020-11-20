"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "NotificationsTexts",
      [
        {
          id: "7465fd03-27a0-49cc-bd0c-6692a1067bc6",
          notificationId: "e2d9204d-5a94-43c4-8f57-5b492edd4717",
          messageText:
            "Vis blandit percipitur disputationi te, mea prompta gubergren ad.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        updateOnDuplicate: ["messageText"],
        upsertKeys: ["id"],
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("NotificationsTexts", null, {});
  },
};
