const register = require("./model");
const { sign } = require("../../utils/jwt");

module.exports = {
  GET: (req, res) => {
    res.render("register");
  },
  POST: async (req, res) => {
    const { full_name, user_name, email, password } = req.body;

    if (!full_name) {
      const findUser = await register.getUser(user_name, password);
      if (!findUser) {
        return res.status(401).send("User not found!");
      } else {
        res.cookie(
          "access_token",
          sign({ id: findUser.user_id, role: findUser.user_status }),
          {
            maxAge: 12 * 3600 * 1000,
          }
        );
        return res.redirect("/bookmaniya");
      }
    } else {
    }
  },
};
