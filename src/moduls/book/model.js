const { fetchData } = require("../../utils/pg");

const getSingleBookQuery = `select * from books where book_id = $1`;

const findCategoryNameQuery = `select category_name from categories where category_id = $1`;

const getAllBooksSameCategoryQuery = `select * from books where category_id = $1`;

const getSingleBook = (id) => fetchData(getSingleBookQuery, id);

const getCategoryName = (id) => fetchData(findCategoryNameQuery, id);

const getAllBooksSameCategory = (id) =>
  fetchData(getAllBooksSameCategoryQuery, id);

const useBuy_bookProcedureQuery = `call buy_book($1,$2)`;

const useBuy_bookProcedure = (b_id, u_id) =>
  fetchData(useBuy_bookProcedureQuery, b_id, u_id);

module.exports = {
  getSingleBook,
  getCategoryName,
  getAllBooksSameCategory,
  useBuy_bookProcedure,
};
