const { fetchData } = require("../../utils/pg");

const getSingleBookQuery = `select * from books where book_id = $1`;

const findCategoryNameQuery = `select category_name from categories where category_id = $1`;

const getAllBooksSameCategoryQuery = `select * from books where category_id = $1`;

const useBuy_bookProcedureQuery = `call buy_book($1,$2,$3)`;

const rate_book_query = `call book_rate($1,$2)`;

const get_book_score_query = `select book_raiting_count,book_raiting_score from book_raiting where book_id = $1`;

const getSingleBook = (id) => fetchData(getSingleBookQuery, id.trim());

const getCategoryName = (id) => fetchData(findCategoryNameQuery, id);

const getAllBooksSameCategory = (id) =>
  fetchData(getAllBooksSameCategoryQuery, id);

const useBuy_bookProcedure = (b_id, u_id, cr_time) => {
  return fetchData(
    useBuy_bookProcedureQuery,
    b_id.trim(),
    u_id.trim(),
    cr_time.trim()
  );
};

const rate_book = (b_id, score) =>
  fetchData(rate_book_query, b_id.trim(), score);

const get_book_score = (id) => fetchData(get_book_score_query, id.trim());

module.exports = {
  getSingleBook,
  getCategoryName,
  getAllBooksSameCategory,
  useBuy_bookProcedure,
  rate_book,
  get_book_score,
};
