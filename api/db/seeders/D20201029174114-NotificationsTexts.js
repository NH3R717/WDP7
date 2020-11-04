"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "NotificationsTexts",
      [
        {
          id: "7465fd03-27a0-49cc-bd0c-6692a1067bc6",
          notificationId: "f9700fa5-e3b2-4c5d-9fc3-10b883b84fcc",
          messageText:
            "Vis blandit percipitur disputationi te, mea prompta gubergren ad. Eu natum accusam consulatu vim, vim zril utamur admodum in, nulla iudico ei vis. Vix an purto instructior. In sea facilis vivendo tincidunt, ad mel vidisse eleifend, sed id causae signiferumque. Pro omnes primis democritum ex.",
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
