const axios = require("axios");
const error = require("debug")("api:error");
// const { v4: uuidv4 } = require("uuid");
const { NotificationsTexts, Sequelize } = require("../models");
const { throwIf, throwError, sendError } = require("../utils/errorHandeling");

exports.createNotificationsTexts = async (req, res) => {
  const { messageText } = req.body;
  try {
    const newNotificationsTexts = await NotificationsTexts.create({
      messageText: messageText,
    })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(throwError(500, "sequelize error for notification"));
    res.status(200).json({ newNotificationsTexts });
  } catch (e) {
    sendError(res)(e);
  }
};

exports.readNotificationsTexts = async (req, res, next) => {
  try {
    const notificationsTextsAll = await NotificationsTexts.findAll().catch(
      throwError(
        500,
        "A database error has ocurred (NotificationsTexts), try again."
      )
    );
    // res.json({ data: notificationsTextsAll });
    res.status(200).json(notificationsTextsAll);
  } catch (e) {
    next(e);
  }
};

exports.updateNotificationsTexts = async (req, res, next) => {
  const { id } = req.params;
  const { messageText } = req.body;
  try {
    const [, [updateNotificationsTexts]] = await NotificationsTexts.update(
      req.body,
      {
        where: { id },
        returning: true,
      }
    )
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(Sequelize.BaseError, throwError(500, "Sequelize error"));
    res.status(200).json(updateNotificationsTexts);
  } catch (e) {
    next(e);
  }
};

exports.deleteNotificationsTexts = async (req, res) => {
  // get the id from the route
  const { id } = req.params;
  try {
    await NotificationsTexts.destroy({ where: { id } })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(Sequelize.BaseError, throwError(500, "Sequelize error"));
    res.sendStatus(202);
  } catch (e) {
    sendError(res)(e);
  }
};
