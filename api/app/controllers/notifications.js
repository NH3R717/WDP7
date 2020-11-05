const axios = require("axios");
const { Notifications, Sequelize } = require("../models");
const { throwIf, throwError, sendError } = require("../utils/errorHandeling");

// const { Notifications } = require("../models");

exports.createNotification = async (req, res) => {
  Object.keys(req.body).forEach((key) => {
    if (req.body[key] === "") delete req.body[key];
  });
  const { id, flag } = req.body;
  try {
    const newNotification = await Notifications.create({
      id,
      flag,
      userId: req.token.id,
    });
    console.log(
      "/controllers/Notifications.js creatflop() newNotification – below"
    );
    console.log(newNotification.id);
    // res.json({ id: newNotification.id });
    res.status(200).json(newNotification);
  } catch (e) {
    sendError(res)(e);
  }
};

exports.readNotifications = async (req, res) => {
  console.log("/controllers/notifications.js getAllNotifications()");
  const Notifications = await Notifications.findAll({
    where: {
      userId: req.userId,
    },
  });
  res.json(Notifications);
};

exports.readUserNotifications = async (req, res) => {};
exports.updateNotification = async (req, res) => {};
exports.deleteNotifications = async (req, res) => {};

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
