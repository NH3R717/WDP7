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
      // flags: DataTypes.ENUM("office", "shop", "field", "all"),
      flags: {
        type: DataTypes.STRING,
        // validate: {
        //   isIn: {
        //     args: ["office", "shop", "field", "all"],
        //     msg: "Flag your message, who's it for?",
        //   },
        // },
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
