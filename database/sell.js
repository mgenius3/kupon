const fs = require('fs');
const { pool } = require('../config/db');
const { tableExists } = require('../utils/checkTableExist');

//create table user
const createTableSell = async () => {
  try {
    const connection = await pool.getConnection();
    await connection.beginTransaction();
    let checkUsertableExists = await tableExists('Sell');
    const user_table = checkUsertableExists
      ? null
      : await connection.query(`CREATE TABLE Sell (
      id INT NOT NULL AUTO_INCREMENT,
      sellerId INT NOT NULL,
      files JSON,
      title VARCHAR(255) NOT NULL,
      location VARCHAR(1000) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      material VARCHAR(255) NOT NULL,
      conditions VARCHAR(255) NOT NULL,
      price VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      PRIMARY KEY (id)
    ) AUTO_INCREMENT=1000`);
  } catch (err) {
    console.error(err.message);
  }
};

const sendPackageDetails = async (data) => {
  const {
    sellerId,
    files,
    title,
    location,
    city,
    state,
    category,
    material,
    conditions,
    price,
    description,
  } = data;
  try {
    const connection = await pool.getConnection();
    await connection.beginTransaction();
    const sell_query = `INSERT INTO Sell (sellerId, files, title, location, city, state, category, material, conditions, price, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const new_sell_user = await pool.query(sell_query, [
      sellerId,
      files,
      title,
      location,
      city,
      state,
      category,
      material,
      conditions,
      price,
      description,
    ]);
    return new_sell_user[0].insertId;
  } catch (err) {
    throw err.message;
  }
};

const getAllSell = async () => {
  const query = 'SELECT * FROM Sell';
  const connection = await pool.getConnection();
  const users = await connection.query(query);
  await connection.release();
  return users[0];
};

const sellDetailById = async (id) => {
  let connection = await pool.getConnection();
  (await connection).beginTransaction();
  let get_package = await connection.query(
    `SELECT * FROM Sell WHERE id = '${id}'`
  );
  await connection.release();
  return get_package[0];
};

const getAUserSell = async (sellerId) => {
  let connection = await pool.getConnection();
  (await connection).beginTransaction();
  let get_user_sell = await connection.query(
    `SELECT * FROM Sell WHERE sellerId = '${sellerId}'`
  );
  await connection.release();
  return get_user_sell[0];
};

module.exports = {
  createTableSell,
  sendPackageDetails,
  getAllSell,
  sellDetailById,
  getAUserSell,
};
