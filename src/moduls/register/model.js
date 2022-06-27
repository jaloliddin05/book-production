const { fetchData } = require("../../utils/pg");

const post_login_query = `select * from users where user_name = $1 AND user_password = $2`;

const check_usrname = `select exists (select user_name from users where user_name = $1)`;

const add_user = `INSERT INTO users (full_name, user_name, user_password, email, user_status) VALUES ($1, $2, $3, $4, 'user') returning *`;

const getUser = (username, password) =>
  fetchData(post_login_query, username, password);

const checkUsername = (user_name) => fetchData(check_usrname, user_name);

const addUser = (full_name, user_name, email, password) =>
  fetchData(add_user, full_name, user_name, password, email);

module.exports = {
  getUser,
  checkUsername,
  addUser,
};
