'use strict';
const {
  Model
} = require('sequelize');
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
  };
  Notifications.init({
    id: DataTypes.UUID,
    flags: DataTypes.ENUM('office', 'shop', 'field', 'all'),
    audiosIs: DataTypes.UUID,
    imagesId: DataTypes.UUID,
    notificationsTextsId: DataTypes.UUID,
    videosId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Notifications',
  });
  return Notifications;
};