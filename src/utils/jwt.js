const jwt = require("jsonwebtoken");

const sign = (payload) => {
  console.log(process.env);
  jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 600,
  });
};

module.exports = {
  sign,
};
