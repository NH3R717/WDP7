const axios = require("axios");
const error = require("debug")("api:error");
// const { v4: uuidv4 } = require("uuid");
const { Notifications, NotificationsTexts, Sequelize } = require("../models");
const { throwIf, throwError, sendError } = require("../utils/errorHandeling");

exports.createNotification = async (req, res) => {
  const { notificationText, id, flags, notificationTextId } = req.body;
  try {
    const newNotifications = await Notifications.create({
      flags: flags,
    })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(throwError(500, "sequelize error for notification"));
    res.status(200).json({ newNotifications });
  } catch (e) {
    // sendError(res)(e);
  }
};

exports.readAudios = async (req, res, next) => {
  try {
    const notificationsAll = await Notifications.findAll().catch(
      throwError(500, "A database error has ocurred, try again.")
    );
    res.json({ data: notificationsAll });
  } catch (e) {
    next(e);
  }
};

exports.updateNotification = async (req, res, next) => {
  const { id } = req.params;
  const { flags } = req.body;
  try {
    const [, [updateNotification]] = await Notifications.update(req.body, {
      where: { id },
      returning: true,
    })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(Sequelize.BaseError, throwError(500, "Sequelize error"));
    res.status(200).json(updateNotification);
  } catch (e) {
    next(e);
  }
};

exports.deleteNotification = async (req, res) => {
  // get the id from the route
  const { id } = req.params;
  try {
    await Notifications.destroy({ where: { id } })
    .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
    .catch(Sequelize.BaseError, throwError(500, "Sequelize error"));
    res.sendStatus(202);
  } catch (e) {
    sendError(res)(e);
  }
};
