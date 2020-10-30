"use strict";
const uuidv4 = require("uuid/v4");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: uuidv4(),
          username: "Star",
          password: "#aHashedPassword#",
          position: "admin",
          about: "Office Dispatch",
          avatar: "https://avatar-url.net",
          // createdAt: Sequelize.literal("NOW()"),
          // updatedAt: Sequelize.literal("NOW()"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        updateOnDuplicate: [
          "username",
          "password",
          "position",
          "about",
          "avatar",
        ],
        upsertKeys: ["id"],
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
