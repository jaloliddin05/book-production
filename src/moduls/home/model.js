const { fetchData } = require("../../utils/pg");

const getAllCategoriesQuery = `select * from categories`;

const getAllCategories = () => fetchData(getAllCategoriesQuery);

const getAllBooksQuery = `select * from books`;

const getAllBooks = () => fetchData(getAllBooksQuery);

const getCurrentUserQuery = `select * from users where user_id = $1`;

const getCurrentUser = (id) => fetchData(getCurrentUserQuery, id);

module.exports = {
  getAllBooks,
  getAllCategories,
  getCurrentUser,
};
