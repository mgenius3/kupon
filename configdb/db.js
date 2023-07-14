const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql.createPool({
  host:
    process.env.NODE_ENV == "production"
      ? process.env.MYSQL_PROD_HOST
      : process.env.MYSQL_HOST,
  user:
    process.env.NODE_ENV == "production"
      ? process.env.MYSQL_PROD_USER
      : process.env.MYSQL_USER,
  password:
    process.env.NODE_ENV == "production"
      ? process.env.MYSQL_PROD_PASSWORD
      : process.env.MYSQL_PASSWORD,
  database:
    process.env.NODE_ENV == "production"
      ? process.env.MYSQL_PROD_DATABASE
      : process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 151,
  queueLimit: 0,
});

module.exports = { pool };
