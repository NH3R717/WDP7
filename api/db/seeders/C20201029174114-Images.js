"use strict";
const uuidv4 = require("uuid/v4");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          id: "96aef80b-5f7b-491d-a44d-1796989103a7",
          imageLink1:
            "https://live.staticflickr.com/2129/5785570987_9c617a047e_h.jpg",
          imageLink2:
            "https://live.staticflickr.com/6105/6297421204_9cff672fa3_h.jpg",
          imageLink3:
            "https://live.staticflickr.com/3511/3210747453_603f87a69a_c.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        updateOnDuplicate: ["imageLink1", "imageLink2", "imageLink3"],
        upsertKeys: ["id"],
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Images", null, {});
  },
};
