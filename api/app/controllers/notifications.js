const { flips } = require("../models");

// Why?
exports.getAllUsersflips = async (req, res) => {
  console.log("/controllers/flips.js getAllUsersflips()");
  const flips = await flips.findAll({
    where: {
      userId: req.userId,
    },
  });
  res.json(flips);
};

exports.getUserflips = async (req, res) => {
  const userflips = await flips.findAll({ where: { userId: req.userId } });
  res.json(userflips);
};

exports.getPublic = async (req, res) => {
  console.log("/controllers/flips.js getPublic()");
  const publicflips = await flips.findAll({
    where: {
      type: "public",
    },
  });

  res.json(publicflips);
};

exports.getPrivate = async (req, res) => {
  console.log("/controllers/flips.js getPrivate()");
  const publicflips = await flips.findAll({
    where: {
      type: "private",
    },
  });

  res.json(publicflips);
};

exports.getOneById = async (req, res) => {
  console.log("/controllers/flips.js getOneById()");
  const { id } = req.params;

  const flop = await flips.findByPk(id);

  if (!flop) {
    res.sendStatus(404);
    return;
  }
  res.json(flop);
};

exports.createflop = async (req, res) => {
  console.log("/controllers/flips.js creatflop()");
  const { name, type } = req.body;

  try {
    const newflop = await flips.create({
      name,
      type,
      userId: req.userId,
    });
    console.log("/controllers/flips.js creatflop() newflop – below");
    console.log(newflop.id);
    res.json({ id: newflop.id });
  } catch (e) {
    const errors = e.errors.map((err) => err.message);
    res.status(400).json({ errors });
  }
};

exports.updateflop = async (req, res) => {
  const { id } = req.params;
  console.log("/controllers/flips.js updateflop()");
  try {
    const [, [updatedflop]] = await flips.update(req.body, {
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
  console.log("/controllers/flips.js deleteflop()");
  const { id } = req.params;
  await flips.destroy({ where: { id } });
  res.sendStatus(200);
};
