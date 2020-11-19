"use strict";
// const uuidv4 = require("uuid/v4");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Notifications",
      [
        {
          id: "f9700fa5-e3b2-4c5d-9fc3-10b883b84fcc",
          userId: "92061fc4-690a-47ba-b3af-64cd6a8909da",
          notificationId: "e2d9204d-5a94-43c4-8f57-5b492edd4717",
          notificationsTextsId: "7465fd03-27a0-49cc-bd0c-6692a1067bc6",
          // TODO – to get new fk ids to populate
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        updateOnDuplicate: ["id", "flags"],
        upsertKeys: ["id"],
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Notifications", null, {});
  },
};
