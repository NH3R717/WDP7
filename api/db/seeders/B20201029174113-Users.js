"use strict";
// const uuidv4 = require("uuid/v4");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "92061fc4-690a-47ba-b3af-64cd6a8909da",
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
        {
          id: "a1679fd1-c7ab-41a3-a3cb-6019cbc35f0e",
          username: "Sun",
          password: "#aHashedPassword#",
          position: "technician",
          about: "Lead field technician.",
          avatar: "https://avatar-url.net",
          // createdAt: Sequelize.literal("NOW()"),
          // updatedAt: Sequelize.literal("NOW()"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "c01d5d70-e837-4164-b62f-143e7a2a7bfa",
          username: "Moon",
          password: "#aHashedPassword#",
          position: "management",
          about: "Office manager.",
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
