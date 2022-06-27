const { fetchData } = require("../../utils/pg");

const user_books_query =
  "SELECT books.book_img, books.book_name FROM BOOKS INNER JOIN USER_BOOK ON user_book.book_id = books.book_id where user_book.user_id = $1";

const user_books = (id) => fetchData(user_books_query, id);

module.exports = {
  user_books,
};
