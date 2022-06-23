const { fetchData } = require("../../utils/pg");

const post_login_query = `select user_name,user_password from users where user_name = $1 AND user_password = $2`;

const getUser = (username, password) =>
  fetchData(post_login_query, username, password);

module.exports = {
  getUser,
};
