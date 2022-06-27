const model = require("./model");

module.exports = {
  GET: async (req, res) => {
    try {
      const id = req.id;
      if (!id) return res.redirect("/register");
      const user_book = await model.user_books(id);
      res.render("user_books", { user_book });
    } catch (err) {
      if (err) throw new Error(err);
    }
  },
};
