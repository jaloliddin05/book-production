const jwt = require("jsonwebtoken");
module.exports = {
  chek_token: async (req, res, next) => {
    const { access_token } = req.cookies;

    if (!access_token) return res.redirect("/register");

    jwt.verify(access_token, process.env.SECRET_KEY, async (err, decode) => {
      if (err instanceof jwt.TokenExpiredError) {
        return res.redirect("/register");
      }
      if (err instanceof jwt.JsonWebTokenError) {
        return res.redirect("/register");
      }

      req.id = decode.id;
      req.role = decode.role;

      next();
    });
  },
};
