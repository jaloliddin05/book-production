const register = require("./model");
const { sign } = require("../../utils/jwt");

module.exports = {
  GET: (req, res) => {
    res.render("register");
  },
  POST: (req, res) => {
    const { full_name, user_name, email, password } = req.body;
    console.log(user_name);
    console.log(password);
    if (!full_name) {
      const findUser = register.getUser(user_name, password);
      if (!findUser) {
        return res.status(401).send("User not found!");
      } else {
        res.cookie(
          "access_token",
          sign({ id: findUser.id, role: findUser.user_status }),
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
