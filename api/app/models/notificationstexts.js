'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationsTexts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NotificationsTexts.init({
    id: DataTypes.UUID,
    messageText: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NotificationsTexts',
  });
  return NotificationsTexts;
};