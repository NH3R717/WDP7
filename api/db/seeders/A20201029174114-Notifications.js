"use strict";
// const uuidv4 = require("uuid/v4");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Notifications",
      [
        {
          id: "f9700fa5-e3b2-4c5d-9fc3-10b883b84fcc",
          usersId: "a1679fd1-c7ab-41a3-a3cb-6019cbc35f0e",
          flags: "Go to the client's Westwood location.",
          notificationId: "e2d9204d-5a94-43c4-8f57-5b492edd4717",
          // ! migration order prevents notification this related from the NotificationsText id from populating in to
          // notificationTextId: "7465fd03-27a0-49cc-bd0c-6692a1067bc6",
          // TODO – to get new fk ids to populate
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "f8bb22b2-aca9-41a5-8adc-e5bd4c7a847f",
          usersId: "a1679fd1-c7ab-41a3-a3cb-6019cbc35f0e",
          flags: "Have you arrived?",
          notificationId: "92435b87-dbb2-4886-a3df-10cf32900884",
          // ! migration order prevents notification this related from the NotificationsText id from populating in to
          // notificationTextId: "7465fd03-27a0-49cc-bd0c-6692a1067bc6",
          // TODO – to get new fk ids to populate
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "fe194d1d-7990-4d03-bb25-8f9001569852",
          usersId: "a1679fd1-c7ab-41a3-a3cb-6019cbc35f0e",
          flags: "Meet Jane at the main gate.",
          notificationId: "b48014d3-6f2c-486c-8318-d3410327c1d7",
          // ! migration order prevents notification this related from the NotificationsText id from populating in to
          // notificationTextId: "7465fd03-27a0-49cc-bd0c-6692a1067bc6",
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
