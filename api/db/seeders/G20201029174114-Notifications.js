"use strict";
const uuidv4 = require("uuid/v4");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Notifications",
      [
        {
          id: uuidv4(),
          flags: "office",
          // TODO – to get new fk ids to populate
          AudiosId: "755ccc52-4dbb-43e8-afbf-3e9dc82b7a65",
          ImagesId: "96aef80b-5f7b-491d-a44d-1796989103a7",
          NotificationsTextsId: "7465fd03-27a0-49cc-bd0c-6692a1067bc6",
          VideosId: "c3a79c9a-b6e6-4317-bf2c-adad52f8f310",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        updateOnDuplicate: [
          "flags",
          "AudiosId",
          "ImagesId",
          "NotificationsTextsId",
          "VideosId",
        ],
        upsertKeys: ["id"],
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Notifications", null, {});
  },
};
