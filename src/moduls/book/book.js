const BOOK = require("./model");

module.exports = {
  GET: async (req, res) => {
    const { book_id } = req.params;

    const [currentBook] = await BOOK.getSingleBook(book_id);

    res.render("book", { currentBook });
  },
  POST: (req, res) => {
    const { book_id } = req.body;

    res.redirect(`/book/${book_id}`);
  },
};
