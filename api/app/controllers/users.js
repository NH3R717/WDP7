const axios = require("axios");
const { Users, Sequelize } = require("../models");
const { throwError, throwIf, sendError } = require("../utils/errorHandeling");
// const AWS = require("aws-sdk");
const uuid = require("uuid").v4;

exports.createUser = async (req, res, next) => {
  console.log("® controller users.js createUser ");
  try {
    const { username } = req.body;
    console.log("® controller users.js", username);
    const user = await users
      .create({ username })
      .catch(Sequelize.ValidationError, throwError(201, "Validation Errors"))
      .catch(
        Sequelize.BaseError,
        throwError(500, '"A database error has ocurred, try again."')
      );
    Sequelize.BaseError,
      throwError(201, '"A database error has ocurred, try again."');
    console.log("® controller users.js", user);
    res.status(201).json(user);
    // res.json(user);
  } catch (e) {
    next(e);
  }
};
exports.readUsers = async (req, res, next) => {
  console.log("® controller users.js getAllUsers ");
  try {
    // const { username } = req.query;
    // console.log("® controller users.js " + username)
    const usersAll = await users
      .findAll()
      .catch(throwError(500, "A database error has ocurred, try again."));
    res.json(usersAll);
    console.log("® controller users.js getAllUsers " + usersAll);
  } catch (e) {
    next(e);
  }
};

exports.readUser = async (req, res, next) => {
  console.log("® controller users.js getOneByIdUser ");
  try {
    const { id } = req.params;
    const userOne = await users.findByPk(id).then(
      throwIf((row) => !row, 404, "User not found."),
      throwError(500, "A database error has ocurred, try again.")
    );
    res.json(userOne);
  } catch (e) {
    next(e);
  }
};

exports.updateUser = async (req, res, next) => {
  console.log("® controller users.js updateUser ");
  const id = req.userId;
  const { username, email, password, position, about, avatar } = req.body;

  const base64Data = newBuffer.form(
    avatar.replace(/^data:image\/\w+;base64,/),
    "base64"
  );

  const type = avatar.split(";")[0].split("/")[1];
  const photoId = uuid();

  const params = {
    Bucket: BUCKET_NAME,
    Key: `${photoId}-avatar.${type}`,
    Body: base64Data,
    ACL: "public-read",
    ContentEncoding: "base64",
    ContentType: `image/${type}`,
  };

  try {
    const { Location } = await s3.upload(params).promise();

    const city_id = (
      await Cities.findByPk({ where: { name: city } }).then(
        throwIf((row) => !row, 404, "City not found")
      )
    ).id;
    const [, [user]] = await users
      .update(
        {
          username,
          avatar: Location,
          cityId,
          stateId,
        },
        {
          where: { id },
          returning: true,
        }
      )
      .catch(
        Sequelize.ValidationError,
        throwError(406, "There's an input problem")
      )
      .catch(Sequelize.BaseError, throwError(500, "It's a db error!"));
    res.status(202).json(user);
  } catch (e) {
    next(e);
  }
};

exports.deleteUser = async (req, res, next) => {
  console.log("® controller users.js deleteUser ");
  try {
    const { id } = req.body;
    const user = await users
      .destroy({ where: { id } })
      .catch(Sequelize.ValidationError, throwError(201, "Validation Errors"))
      .catch(
        Sequelize.BaseError,
        throwError(500, "A database error has ocurred, try again.")
      );
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};
