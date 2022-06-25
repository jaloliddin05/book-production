const BOOK = require("./model");
const jwt = require("jsonwebtoken");

module.exports = {
  GET: async (req, res) => {
    const { book_id } = req.params;
    console.log(book_id);
    const [currentBook] = await BOOK.getSingleBook(book_id);
    const [{ category_name } = currentCategory] = await BOOK.getCategoryName(
      currentBook.category_id
    );
    const allBooks = await BOOK.getAllBooksSameCategory(
      currentBook.category_id
    );

    res.render("book", { currentBook, category_name, allBooks });
  },
  POST: (req, res) => {
    const { book_id, book_buy_id } = req.body;
    if (!book_buy_id) {
      return res.redirect(`/book/${book_id}`);
    } else {
      const { access_token } = req.cookies;

      if (access_token) {
        jwt.verify(
          access_token,
          process.env.SECRET_KEY,
          async (err, decode) => {
            if (err) {
              console.log(err);
            }
            console.log(decode.id);
            const useProcedure = await BOOK.useBuy_bookProcedure(
              book_buy_id,
              decode.id
            );
          }
        );
      }
      return res.redirect(`/book/${book_buy_id}`);
    }
  },
};
