"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(models) {
      Images.belongsTo(models.Notifications, {foreignKeys: 'notificationsId'});
      Images.hasOne(models.Notifications, {foreignKey: 'imagesId'});
    }
  }
  Images.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      imageLink1: DataTypes.STRING,
      imageLink2: DataTypes.STRING,
      imageLink3: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Images",
    }
  );
  return Images;
};
