const { fetchData } = require("../../utils/pg");

const getSingleBookQuery = `select * from books where book_id = $1`;

const getSingleBook = (id) => fetchData(getSingleBookQuery, id);

module.exports = {
  getSingleBook,
};
