const register = require("./model");
const { sign } = require("../../utils/jwt");
const jwt = require("jsonwebtoken");

module.exports = {
  GET: (_, res) => {
    res.render("register", { msg: "" });
  },
  POST: async (req, res) => {
    const { full_name, user_name, email, password } = req.body;
    if (!full_name) {
      const [findUser] = await register.getUser(user_name, password);
      if (!findUser) {
        return res.status(401).send("User not found!");
      } else {
        res.cookie(
          "access_token",
          jwt.sign(
            { id: findUser.user_id, role: findUser.user_status },
            process.env.SECRET_KEY
          ),
          { maxAge: 12 * 3600 * 1000 }
        );
        return res.redirect("/bookmaniya");
      }
    } else {
      const [{ exists } = check] = await register.checkUsername(user_name);
      if (!exists) {
        const add_user = await register.addUser(
          full_name,
          user_name,
          email,
          password
        );
        res.cookie(
          "access_token",
          sign({ id: add_user.user_id, role: add_user.user_status }),
          {
            maxAge: 12 * 3600 * 1000,
          }
        );
        return res.redirect("/bookmaniya");
      } else {
        res.render("register", { msg: "Bunday username mavjud" });
      }
    }
  },
};
