const axios = require("axios");
const error = require("debug")("api:error");
// const { v4: uuidv4 } = require("uuid");
const { Images, Sequelize } = require("../models");
const { throwIf, throwError, sendError } = require("../utils/errorHandeling");

exports.createImages = async (req, res) => {
  const { imageLink1, imageLink2, imageLink3 } = req.body;
  try {
    const newAudio = await Images.create({
      imageLink1: imageLink1,
      imageLink2: imageLink2,
      imageLink3: imageLink3,
    })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(throwError(500, "sequelize error for notification"));
    res.status(200).json({ newAudio });
  } catch (e) {
    sendError(res)(e);
  }
};

exports.readImages = async (req, res, next) => {
  try {
    const imagesAll = await Images.findAll().catch(
      throwError(500, "A database error has ocurred (Images), try again.")
    );
    // res.json({ data: imagesAll });
    res.status(200).json(imagesAll);
  } catch (e) {
    next(e);
  }
};

exports.updateImages = async (req, res, next) => {
  const { id } = req.params;
  const { imageLink1, imageLink2, imageLink3 } = req.body;
  try {
    const [, [updateImages]] = await Images.update(req.body, {
      where: { id },
      returning: true,
    })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(Sequelize.BaseError, throwError(500, "Sequelize error"));
    res.status(200).json(updateImages);
  } catch (e) {
    next(e);
  }
};

exports.deleteImages = async (req, res) => {
  // get the id from the route
  const { id } = req.params;
  try {
    await Images.destroy({ where: { id } })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(Sequelize.BaseError, throwError(500, "Sequelize error"));
    res.sendStatus(202);
  } catch (e) {
    sendError(res)(e);
  }
};
