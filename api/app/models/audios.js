"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Audios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Audios.belongsTo(models.Notifications, {foreignKey: 'notificationsId'});
      Audios.hasOne(models.Notifications, {foreignKey: 'audiosId'});
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
      // notificationId: {
      //   type: DataTypes.STRING,
      // },
      audioLink1: DataTypes.STRING,
      audioLink2: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Audios",
    }
  );

  // Audios.associate = (models) => {
  //   Audios.belongsTo(models.Notifications, {foreignKey: 'notificationsId'})
  // }
  return Audios;
};