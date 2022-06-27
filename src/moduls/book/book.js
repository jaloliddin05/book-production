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
    const [book] = await BOOK.get_book_score(book_id);

    const scoree = (book.book_raiting_score / book.book_raiting_count).toFixed(
      1
    );

    res.render("book", {
      currentBook,
      category_name,
      allBooks,
      scoree: scoree || 0,
    });
  },
  POST: async (req, res) => {
    const { book_id, book_buy_id, score } = req.body;

    console.log(score);
    if (!book_buy_id && !score) {
      console.log("aaa");
      return res.redirect(`/book/${book_id}`);
    } else if (book_buy_id) {
      console.log("jjj");
      const { access_token } = req.cookies;
      if (access_token) {
        jwt.verify(
          access_token,
          process.env.SECRET_KEY,
          async (err, decode) => {
            if (err) {
              console.log(err);
            }
            const cr_time = new Date();
            console.log(cr_time.toISOString().split("T")[0]);
            const useProcedure = await BOOK.useBuy_bookProcedure(
              book_buy_id,
              decode.id,
              cr_time.toISOString().split("T")[0]
            );
          }
        );
      }
      return res.redirect(`/book/${book_buy_id}`);
    } else if (score) {
      console.log("lll");
      const rate_book = await BOOK.rate_book(book_id, score);
      const [book] = await BOOK.get_book_score(book_id);

      const scoree = (
        book.book_raiting_score / book.book_raiting_count
      ).toFixed(1);

      return res.send({ scoree });
    }
  },
};
