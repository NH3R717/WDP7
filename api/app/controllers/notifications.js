const axios = require("axios");
const error = require("debug")("api:error");
const { v4: uuidv4 } = require("uuid");
const { Notifications, NotificationsTexts, Sequelize } = require("../models");
const { throwIf, throwError, SendError } = require("../utils/errorHandeling");

exports.createNotification = async (req, res) => {
  
  console.log("api/controllers/notifications.js – createNotification()");
  
let { flags, messageText } = req.body;
let notificationId = uuidv4();
  
  console.log("api/controllers/notifications.js – createNotification() – body " + flags);
  console.log("api/controllers/notifications.js – createNotification() – token " + req.user.id);
  let usersId = req.user.id;
  console.log("api/controllers/notifications.js – createNotification() – usersId " + usersId);
  console.log("api/controllers/notifications.js – createNotification() – notificationId " + notificationId);
  try {
    // if audio not null 
    // add "belongsTo" to model
    // update models

    const newTextsforNotifications = await NotificationsTexts.create({
            messageText,
            notificationId
          })
    .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
    .catch(throwIf(row => !row, 404, 'Not Found', 'Message Not Found'),)
    .catch(throwError(500, "Sequelize Error"));
    const newNotifications = await Notifications.create({
      usersId,
      notificationId,
      flags,
      notificationsTextsId: newTextsforNotifications.id
    })
    .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
    .catch(throwIf(row => !row, 404, 'Not Found', 'Notification Not Found'),)
    .catch(throwError(500, "Sequelize Error"));
    res.status(200).json({newNotifications, newTextsforNotifications});
    // res.status(200).json({newNotifications, messageText: newTextsforNotifications.messageText});
  } catch (e) {
    console.log(
      "api/controllers/notifications.js – createNotification() – !error"
    );
    SendError(res, e);
  }
};

// ! √
exports.readNotifications = async (req, res, next) => {
  console.log('Current User ', req.user.id)
  try {
    const notificationsAll = await Notifications.findAll().catch(
      throwError(500, "A database error has ocurred, try again.")
    );
    res.json(notificationsAll);
    console.log("® controller users.js readNotifications " + notificationsAll);
  } catch (e) {
    next(e);
  }
};

// !
exports.readUserNotifications = async (req, res) => {
  console.log("/controllers/Notifications.js readUserNotifications()");
  let usersId = req.user.id;
  console.log("/controllers/Notifications.js readUserNotifications() " + usersId)
  try {
  const notificationOne = await Notifications.findByPk(usersId).catch(
    throwError(500, "A database error has ocurred, try again.")
  );
  res.json(notificationOne);
  console.log("® controller users.js readNotifications " + notificationOne);
} catch (e) {
  next(e);
}
};

exports.updateNotification = async (req, res) => {
  console.log("controller/notifictions.js — updateNotification()");
};
exports.deleteNotification = async (req, res) => {
  console.log("controller/notifictions.js — deleteNotifications()");
};

// ! Hold

exports.getOneById = async (req, res) => {
  console.log("/controllers/Notifications.js getOneById()");
  const { id } = req.user.id
  
  const notificationOne = await Notifications.findByPk(id);
  console.log("/controllers/Notifications.js getOneById()");

  if (!notificationOne) {
    res.sendStatus(404);
    return;
  }
  res.json(notificationOne);
};

exports.getUserflips = async (req, res) => {
  const userflips = await Notifications.findAll({
    where: { userId: req.userId },
  });
  res.json(userflips);
};

exports.updateflop = async (req, res) => {
  const { id } = req.params;
  console.log("/controllers/Notifications.js updateflop()");
  try {
    const [, [updatedflop]] = await Notifications.update(req.body, {
      where: { id },
      returning: true,
    });
    res.json(updatedflop);
  } catch (e) {
    const errors = e.errors.map((err) => err.message);
    res.status(400).json({ errors });
  }
};

exports.deleteflop = async (req, res) => {
  console.log("/controllers/Notifications.js deleteflop()");
  const { id } = req.params;
  await Notifications.destroy({ where: { id } });
  res.sendStatus(200);
};