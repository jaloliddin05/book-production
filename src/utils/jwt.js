const jwt = require("jsonwebtoken");

const sign = (payload) =>
  jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 66600,
  });
module.exports = {
  sign,
};
