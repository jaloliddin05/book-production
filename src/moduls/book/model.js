const { fetchData } = require("../../utils/pg");

const getSingleBookQuery = `select * from books where book_id = $1`;

const findCategoryNameQuery = `select category_name from categories where category_id = $1`;

const getSingleBook = (id) => fetchData(getSingleBookQuery, id);

const getCategoryName = (id) => fetchData(findCategoryNameQuery, id);

module.exports = {
  getSingleBook,
  getCategoryName,
};
