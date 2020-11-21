const axios = require("axios");
const error = require("debug")("api:error");
// const { v4: uuidv4 } = require("uuid");
const { Notifications, NotificationsTexts, Sequelize } = require("../models");
const { throwIf, throwError, sendError } = require("../utils/errorHandeling");

exports.createNotification = async (req, res) => {
  console.log("api/controllers/notifications.js – createNotification()");
  // const notificationId = uuid(),
  const { notificationText, id, flags, notificationTextId } = req.body;
  console.log("incoming data: ", req.body);
  // console.log("incoming data: ", req.user.id, notificationText, id);
  try {
    const newNotifications = await Notifications.create({
      usersId: req.user.id,
      notificationId: id,
      flags: flags
      // notificationTextId: notificationTextId,
    })
      .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
      .catch(throwError(500, "sequelize error for notification"));
    // ! how to get this NotificationsTexts.id to show up in Notifications.notificationTextId?
    // const newTextsforNotifications = await NotificationsTexts.create({
    //   messageText: notificationText,
    //   notificationId: id,
    //   notificationTextId: notificationTextId,
    // })
    //   .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
    //   .catch(throwError(500, "sequelize error for text"));
    // res.status(200).json({ newNotifications });
    // res.status(200).json({newNotifications, messageText: newTextsforNotifications.messageText});
    // res.status(200).json({ newNotifications, newTextsforNotifications });
    res.status(200).json({ newNotifications });
  } catch (e) {
    console.log(
      "api/controllers/notifications.js – createNotification() – !error"
    );
    console.log("ERROR>>> ", e);
    // sendError(res)(e);
  }
};

// ! √
exports.readNotifications = async (req, res, next) => {
  try {
    const notificationsAll = await Notifications.findAll().catch(
      throwError(500, "A database error has ocurred, try again.")
    );
    // const notificationsTextsAll = await NotificationsTexts.findAll().catch(
    //   throwError(500, "A database error has ocurred, try again.")
    // );
    res.json({ data: notificationsAll });
    console.log("® controller users.js readNotifications " + notificationsAll);
  } catch (e) {
    next(e);
  }
};

exports.readNotificationsTexts = async (req, res, next) => {
  try {
   
    const notificationsTextsAll = await NotificationsTexts.findAll().catch(
      throwError(500, "A database error has ocurred, try again.")
    );
    res.json({ data: notificationsTextsAll });
    console.log("® controller users.js readNotifications " + notificationsAll);
  } catch (e) {
    next(e);
  }
};

// ! junk
// exports.readUserNotifications = async (req, res) => {
//   console.log("/controllers/Notifications.js readUserNotifications()");
//   let usersId = req.user.id;
//   console.log(
//     "/controllers/Notifications.js readUserNotifications() " + usersId
//   );
//   try {
//     const notificationOne = await Notifications.findByPk(usersId).catch(
//       throwError(500, "A database error has ocurred, try again.")
//     );
//     res.json(notificationOne);
//     console.log("® controller users.js readNotifications " + notificationOne);
//   } catch (e) {
//     next(e);
//   }
// };

// ! for with messageText.NotificationText

// exports.updateNotification = async (req, res, next) => {
//   const { id } = req.params;
//   const { messageText } = req.body;
//   console.log(
//     "controller/notifications.js — updateNotification()",
//     id,
//     messageText
//   );
//   try {
//     const [, [messageTextfromDB]] = await NotificationsTexts.update(req.body, {
//       where: { id },
//       returning: true,
//     })
//       .catch(Sequelize.ValidationError, throwError(406, "Validation Error"))
//       .catch(
//         Sequelize.BaseError,
//         throwError(500, "A database erorr has occured")
//       );
//     console.log(">>>>", messageTextfromDB);
//     res.status(202).json(messageTextfromDB);
//   } catch (e) {
//     console.log("ERROR", e);
//     next(e);
//   }
// };

exports.updateNotification = async (req, res, next) => {
  const { id } = req.params;
  const { flags } = req.body;
  console.log(req.body)
  console.log(req.params)
  console.log(
    "controller/notifications.js — updateNotification()",
    id,
    flags
  );
  try {
    const [, [updateNotification]] = await Notifications.update(req.body, {
      where: { id },
      returning: true,
    })
      .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
      .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
    res.status(200).json(updateNotification);
  } catch (e) {
    console.log("ERROR", e);
    next(e);
  }
};

// try {
//   const [, [updateNotification]] = await Notifictions.update(req.body, {
//     where: { id },
//     returning: true,
//   })
//     .catch(Sequelize.ValidationError, throwError(422, 'Validation Error'))
//     .catch(Sequelize.BaseError, throwError(500, 'Sequelize error'));
//   res.status(200).json(updateNotification);
// } 

exports.deleteNotification = async (req, res, next) => {
  const { notificationId } = req.params;
  console.log("controller/notifictions.js — deleteNotification()");
  try {
    const notificationText = await NotificationsTexts.destroy({
      where: {
        notificationId,
      },
    }).catch(throwError(500, "A database error has ocurred, try again."));
    
    const notification = await Notifications.destroy({
      where: {
        notificationId,
      },
    }).catch(throwError(500, "A database error has ocurred, try again."));
    res.json(notificationText);
    console.log("® controller users.js readNotifications " + notificationText);
  } catch (e) {
    next(e);
  }
};

// ! Hold

// exports.getOneById = async (req, res) => {
//   console.log("/controllers/Notifications.js getOneById()");
//   const { id } = req.user.id;

//   const notificationOne = await Notifications.findByPk(id);
//   console.log("/controllers/Notifications.js getOneById()");

//   if (!notificationOne) {
//     res.sendStatus(404);
//     return;
//   }
//   res.json(notificationOne);
// };

// exports.getUserflips = async (req, res) => {
//   const userflips = await Notifications.findAll({
//     where: { userId: req.userId },
//   });
//   res.json(userflips);
// };

// exports.updateflop = async (req, res) => {
//   const { id } = req.params;
//   console.log("/controllers/Notifications.js updateflop()");
//   try {
//     const [, [updatedflop]] = await Notifications.update(req.body, {
//       where: { id },
//       returning: true,
//     });
//     res.json(updatedflop);
//   } catch (e) {
//     const errors = e.errors.map((err) => err.message);
//     res.status(400).json({ errors });
//   }
// };

// exports.deleteflop = async (req, res) => {
//   console.log("/controllers/Notifications.js deleteflop()");
//   const { id } = req.params;
//   await Notifications.destroy({ where: { id } });
//   res.sendStatus(200);
// };
