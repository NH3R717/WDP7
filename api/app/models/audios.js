"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Audios extends Model {}
  Audios.init(
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
      audioLink1: DataTypes.STRING,
      audioLink2: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Audios",
    }
  );
  Audios.associations = (models) => {
    Audios.belongsTo(models.Notifications, { foreignKey: "notificationsId" });
    Audios.hasOne(models.Notifications, { foreignKey: "audiosId" });
  };

  return Audios;
};
