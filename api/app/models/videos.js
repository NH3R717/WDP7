"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Videos.belongsTo(models.Notifications, {foreignKey: 'notificationsId'})
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
// Videos.associate = (models) => {
// Videos.belongsTo(models.Notifications, {foreignKey: 'notificationsId'})
// }

  return Videos;
};
