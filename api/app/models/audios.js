'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Audios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Audios.init({
    id: DataTypes.UUID,
    audioLink1: DataTypes.STRING,
    audioLink2: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Audios',
  });
  return Audios;
};