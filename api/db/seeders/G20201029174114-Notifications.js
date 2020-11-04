"use strict";
// const uuidv4 = require("uuid/v4");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Notifications",
      [
        {
          id: "f9700fa5-e3b2-4c5d-9fc3-10b883b84fcc",
          flags: "office",
          // TODO – to get new fk ids to populate
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        updateOnDuplicate: [
          "flags",
          "audiosId",
          "imagesId",
          "notificationsTextsId",
          "videosId",
        ],
        upsertKeys: ["id"],
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Notifications", null, {});
  },
};
