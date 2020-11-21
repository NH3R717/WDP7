"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Audios extends Model {
    static associate(models) {
      Audios.belongsTo(models.Notifications, { foreignKey: "notificationsId" });
      Audios.hasOne(models.Notifications, { foreignKey: "audiosId" });
    }
  }
  Audios.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      audioLink1: DataTypes.STRING,
      audioLink2: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Audios",
    }
  );

  return Audios;
};
