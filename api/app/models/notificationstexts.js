"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NotificationsTexts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   NotificationsTexts.belongsTo(models.Notifications, {foreignKey: 'notificationsId'})
    // }
  }
  NotificationsTexts.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      messageText: {
        type: DataTypes.STRING,
        // validate: {
        //   len: {
        //     args: [1, 300],
        //     msg:
        //       'Message is to long, make it less than 300 characters (that\'s 2 "Tweets")',
        //   },
        // },
      },
    },
    {
      sequelize,
      modelName: "NotificationsTexts",
    }
  );

  NotificationsTexts.associate = (models) => {
    NotificationsTexts.belongsTo(models.Notifications, {foreignKey: 'notificationId'})
  }

  return NotificationsTexts;
};