const axios = require("axios");
const error = require("debug")("api:error");
// const { v4: uuidv4 } = require("uuid");
const { Notifications, NotificationsTexts, Sequelize } = require("../models");
const { throwIf, throwError, sendError } = require("../utils/errorHandeling");
// const { Notifications } = require("../models");

// exports.createNotification = async (req, res) => {
//   Object.keys(req.body).forEach((key) => {
//     if (req.body[key] === "") delete req.body[key];
//   });
//   const { flag } = req.body;
//   try {
//     const newNotification = await Notifications.create({
//       flag,
//       userId: req.token.id,
//     });
//     console.log(
//       "/controllers/Notifications.js creatNotification() newNotification – below"
//     );
//     console.log(newNotification);
//     // res.json({ id: newNotification.id });
//     res.status(200).json(newNotification);
//   } catch (e) {
//     // sendError(res)(e);
//   }
// };

exports.createNotification = async (req, res) => {
  console.log("api/controllers/notifications.js – createNotification()");
  let { flags } = req.body;
  console.log("api/controllers/notifications.js – createNotification() – body " + flags);
  console.log("api/controllers/notifications.js – createNotification() – token " + req.user.id,);

//   // no id: "" database makes the id

//   // {
//   //   userId,
//   //   flags: "office",
//   //   messageText: "Meeting at 3pm",
//   //   imageLink1:"url1.com",
//   //   imageLink2:"url2.com",
//   //   imageLink3:"url3.com",
//   // }
  
  try {
    const newNotifications = await Notifications.create({
      flags,
      userId: req.user.id,
    })
//     console.log(">>> Notifications", newNotifications.id);
//     const newTextsforNotifications = await NotificationsTexts.create({
//       messageText,
//       notificationsId: newNotifications.id,
//     })
//     const newImagesforNotifications = await NotificationsImages.create({
//       imageLink1,
//       imageLink2,
//       imageLink3,
//     })

//     await Notifications.destory({
//       id: Notifications,
//     });
//     await Notifications.destory({
//       id: Notifications,
//     });
//     await Notifications.destory({
//       id: Notifications,
//     })

    console.log(
      "api/controllers/notifications.js – createNotification() – newNotification ",
      newNotifications
    )
    .catch(Sequelize.ValidationError, throwError(422, "Validation Error"))
    .catch(throwError(500, "sequelize error"));
    res.status(200).json(newNotifications);
  } catch (e) {
    console.log(
      "api/controllers/notifications.js – createNotification() – !error"
    );
    sendError(res)(e);
  }
};

// ! √
exports.readNotifications = async (req, res, next) => {
  console.log('Current User ', req.user)
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

exports.readUserNotifications = async (req, res) => {};
exports.updateNotification = async (req, res) => {};
exports.deleteNotification = async (req, res) => {
  console.log("controller/notifictions.js — deleteNotifications()");
};

exports.getOneById = async (req, res) => {
  console.log("/controllers/Notifications.js getOneById()");
  const { id } = req.params;

  const flop = await Notifications.findByPk(id);

  if (!flop) {
    res.sendStatus(404);
    return;
  }
  res.json(flop);
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
