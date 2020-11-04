"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Audios",
      [
        {
          id: "755ccc52-4dbb-43e8-afbf-3e9dc82b7a65",
          notificationId: "f9700fa5-e3b2-4c5d-9fc3-10b883b84fcc",
          audioLink1:
            "http://amclassical.com/mp3/amclassical_bon_sonata_in_g_minor_mvt_1.mp3",
          audioLink2:
            "http://amclassical.com/mp3/amclassical_joplin_the_entertainer_rag.mp3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        updateOnDuplicate: ["audioLink1", "audioLink2"],
        upsertKeys: ["id"],
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete("Audios", null, {});
  },
};
