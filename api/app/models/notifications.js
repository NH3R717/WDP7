"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notifications.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      usersId: DataTypes.STRING,
      notificationId: DataTypes.STRING,
      // notificationId: { 
      //   allowNull: false,
      //   primaryKey: false,
      //   type: DataTypes.UUID,
      //   defaultValue: DataTypes.UUIDV4,
      // },
      // flags: DataTypes.ENUM("office", "shop", "field", "all"),
      flags: {
        type: DataTypes.STRING("office", "shop", "field", "all"),
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
    Notifications.hasOne(models.Audios, {foreignKey: id})
    Notifications.hasOne(models.Images, {foreignKey: id})
    Notifications.hasOne(models.NotificationsText, {foreignKey: id})
    Notifications.hasOne(models.Videos, {foreignKey: id})
  };
 
  return Notifications;
};
