const jwt = require("jsonwebtoken");
const { Users } = require("../models");

module.exports = (req, res, next) => {
  console.log("Auth protection...");
  const { authorization } = req.headers;
  console.log("protectedRoutes req.headers", authorization);
  // console.log ("protectedRoutes req.headers", req.headers)
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  const token = authorization.replace("Bearer ", "");
  console.log("JWT token...", token);
  // args(token,secret,callback)
  jwt.verify(token, process.env.SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in." });
    }

    const { id } = payload;
    console.log("trying to verify", id);
    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(401).send({ error: "Account deactivated." });
    }

    req.user = user;
    next();
  });
};
