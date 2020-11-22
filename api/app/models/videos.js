"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {}
  Videos.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      notificationId: {
        type: DataTypes.STRING,
        // allowNull: false,
        // primaryKey: false,
        // type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV4,
      },
      videoLink1: DataTypes.STRING,
      videoLink2: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Videos",
    }
  );
  Videos.associations = (models) => {
    Videos.belongsTo(models.Notifications, { foreignKey: "notificationsId" });
    Videos.hasOne(models.Notifications, { foreignKey: "imagesId" });
  };
  return Videos;
};
