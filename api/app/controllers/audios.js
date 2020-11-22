const axios = require("axios");
const error = require("debug")("api:error");
// const { v4: uuidv4 } = require("uuid");
const { Notifications, Users, Audios, Images, Sequelize } = require("../models");
const { throwIf, throwError, sendError } = require("../utils/errorHandeling");

exports.createNotification = async (req, res) => {
  const { audioLink1, audioLink2 } = req.body;
  try {
    const newAudio = await Audios.create({
      audioLink1: audioLink1, 
      audioLink2: audioLink2
    })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(throwError(500, "sequelize error for notification"));
    res.status(200).json({ newAudio });
  } catch (e) {
    sendError(res)(e);
  }
};

exports.readAudios = async (req, res, next) => {
  try {
    const audiosAll = await Audios.findAll().catch(
      throwError(500, "A database error has ocurred (Audios), try again.")
    );
    // res.json({ data: audiosAll });
    res.status(200).json(audiosAll);
  } catch (e) {
    next(e);
  }
};

exports.updateAudios = async (req, res, next) => {
  const { id } = req.params;
  const { audioLink1, audioLink2 } = req.body;
  try {
    const [, [updateAudios]] = await Audios.update(req.body, {
      where: { id },
      returning: true,
    })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(Sequelize.BaseError, throwError(500, "Sequelize error"));
    res.status(200).json(updateAudios);
  } catch (e) {
    next(e);
  }
};

exports.deleteAudios = async (req, res) => {
  // get the id from the route
  const { id } = req.params;
  try {
    await Audios.destroy({ where: { id } })
    .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
    .catch(Sequelize.BaseError, throwError(500, "Sequelize error"));
    res.sendStatus(202);
  } catch (e) {
    sendError(res)(e);
  }
};
