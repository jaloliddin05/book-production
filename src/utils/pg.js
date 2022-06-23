const { Pool } = require("pg");
const connection = require("../config/db");

const pool = new Pool({
  connectionString: connection.connectionElString,
});

const fetchData = async (SQL, ...params) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, params.length ? params : null);
    return rows;
  } finally {
    client.release();
  }
};

module.exports = {
  fetchData,
};
