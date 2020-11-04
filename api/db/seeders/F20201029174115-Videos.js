"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Videos",
      [
        {
          id: "c3a79c9a-b6e6-4317-bf2c-adad52f8f310",
          videoLink1:
            "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4",
          videoLink2:
            "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        updateOnDuplicate: ["videoLink1", "videoLink2"],
        upsertKeys: ["id"],
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Videos", null, {});
  },
};
