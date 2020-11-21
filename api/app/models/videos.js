"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {
    static associate(models) {
      Videos.belongsTo(models.Notifications, { foreignKey: "notificationsId" });
      Videos.hasOne(models.Notifications, { foreignKey: "imagesId" });
    }
  }
  Videos.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      videoLink1: DataTypes.STRING,
      videoLink2: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Videos",
    }
  );
  return Videos;
};
