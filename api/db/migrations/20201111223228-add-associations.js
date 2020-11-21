'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Notifications',
      'imagesId',
      {
        type: Sequelize.UUID,
        references: {
          model: 'Images',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
      .then(() => {
        return queryInterface.addColumn(
          'Notifications',
          'notificationTextId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'NotificationsTexts',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'Notifications',
          'audiosId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'Audios',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      })
      .then(() => {
        return queryInterface.addColumn(
          'Notifications',
          'videosId',
          {
            type: Sequelize.UUID,
            references: {
              model: 'Videos',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Notifications',
      'imagesId',
    )
      .then(() => {
        return queryInterface.removeColumn(
          'Notifications',
          'notificationTextId',
        );
      })
      .then(() => {
        return queryInterface.removeColumn(
          'Notifications',
          'audiosId',
        );
      })
      .then(() => {
        return queryInterface.removeColumn(
          'Notifications',
          'videosId',
        );
      });
  }
};
