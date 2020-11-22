const axios = require("axios");
const error = require("debug")("api:error");
// const { v4: uuidv4 } = require("uuid");
const { Videos, Sequelize } = require("../models");
const { throwIf, throwError, sendError } = require("../utils/errorHandeling");

exports.createVideos = async (req, res) => {
  const { videoLink1, videoLink2 } = req.body;
  try {
    const newVideo = await Videos.create({
      videoLink1: videoLink1,
      videoLink2: videoLink2,
    })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(throwError(500, "sequelize error for notification"));
    res.status(200).json({ newVideo });
  } catch (e) {
    sendError(res)(e);
  }
};

exports.readVideos = async (req, res, next) => {
  try {
    const videosAll = await Videos.findAll().catch(
      throwError(500, "A database error has ocurred (Videos), try again.")
    );
    // res.json({ data: videosAll });
    res.status(200).json(videosAll);
  } catch (e) {
    next(e);
  }
};

exports.updateVideos = async (req, res, next) => {
  const { id } = req.params;
  const { videoLink1, videoLink2 } = req.body;
  try {
    const [, [updateVideos]] = await Videos.update(req.body, {
      where: { id },
      returning: true,
    })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(Sequelize.BaseError, throwError(500, "Sequelize error"));
    res.status(200).json(updateVideos);
  } catch (e) {
    next(e);
  }
};

exports.deleteVideos = async (req, res) => {
  // get the id from the route
  const { id } = req.params;
  try {
    await Videos.destroy({ where: { id } })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(Sequelize.BaseError, throwError(500, "Sequelize error"));
    res.sendStatus(202);
  } catch (e) {
    sendError(res)(e);
  }
};
