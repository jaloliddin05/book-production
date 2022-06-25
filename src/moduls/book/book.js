const BOOK = require("./model");

module.exports = {
  GET: (req, res) => {
    res.render("book");
  },
  POST: async (req, res) => {
    const { book_id } = req.body;

    const curretn_book = await BOOK.getSingleBook(book_id);
  },
};
