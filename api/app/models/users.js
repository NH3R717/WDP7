"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: [true],
            msg: "Use a valid email address.",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          // is: {
          //   args: ["^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"],
          //   msg:
          //     "Password must be at least 8 characters and at least one letter and one number.",
          // },
          // len: {
          //   args: [8, 20],
          //   msg: "Password must be between 6-20 characters.",
          // },
        },
      },
      position: DataTypes.ENUM("technician", "management", "admin"),
      position: {
        type: DataTypes.ENUM("technician", "management", "admin"),
        validate: {
          isIn: {
            args: ["technician", "management", "admin"],
            msg: "Chose a position.",
          },
        },
      },
      about: DataTypes.STRING,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
