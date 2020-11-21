"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notifications extends Model {}
  Notifications.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      usersId: DataTypes.STRING,
      // notificationId: DataTypes.STRING,
      notificationId: {
        // type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      flags: {
        type: DataTypes.STRING,
       // validate: {
        //   len: {
        //     args: [1, 300],
        //     msg:
        //       'Message is to long, make it less than 300 characters (that\'s 2 "Tweets")',
        //   },
        // },
      },
      notificationTextId: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Notifications",
    }
  );

  Notifications.associations = (models) => {
    Notifications.hasOne(models.Audios, { foreignKey: notificationId });
    Notifications.hasOne(models.Images, { foreignKey: notificationId });
    Notifications.hasOne(models.NotificationsTexts, {
      foreignKey: notificationId,
    });
    Notifications.hasOne(models.Videos, { foreignKey: notificationId });
    Notifications.belongsTo(models.NotificationsTexts, { foreignKey: id });
  };

  return Notifications;
};
