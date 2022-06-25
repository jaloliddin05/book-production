const home = require("./model");
const jwt = require("jsonwebtoken");

module.exports = {
  GET: (req, res) => {
    const { access_token } = req.cookies;

    if (access_token) {
      jwt.verify(access_token, process.env.SECRET_KEY, async (err, decode) => {
        if (err) {
          console.log(err);
        }
        // if (decode.role == "admin") {
        //   return res.redirect("/admin");
        // } else {
        const allCategories = await home.getAllCategories();
        const allBooks = await home.getAllBooks();
        const currentUser = await home.getCurrentUser(decode.id);

        return res.render("home", { allBooks, allCategories, currentUser });
      });
    }
    //else {
    //   return res.redirect("/register");
    // }
  },
};
