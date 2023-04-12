const fs = require('fs');
const { pool } = require('../config/db');
const { tableExists } = require('../utils/checkTableExist');

//create table user
const createTableLogistics = async () => {
  try {
    const connection = await pool.getConnection();
    await connection.beginTransaction();
    let checkUsertableExists = await tableExists('logistics');
    const user_table = checkUsertableExists
      ? null
      : await connection.query(`CREATE TABLE logistics (
      id INT NOT NULL AUTO_INCREMENT,
      userId VARCHAR(255) NOT NULL,
      files LONGTEXT NOT NULL,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      telephone VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      pickupAddress VARCHAR(255) NOT NULL,
      pickupCity VARCHAR(255) NOT NULL,
      pickupState VARCHAR(255) NOT NULL,
      postCode VARCHAR(255) NOT NULL,
      deliveryAddress VARCHAR(255) NOT NULL,
      deliveryCity VARCHAR(255) NOT NULL,
      deliveryState VARCHAR(255) NOT NULL,
      receiverCode VARCHAR(255) NOT NULL,
      receiverTelephone VARCHAR(255) NOT NULL,
      status VARCHAR(255) DEFAULT 'pending',
      paid BIT DEFAULT 0,
      referenceId VARCHAR(255),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    ) AUTO_INCREMENT=1000`);
  } catch (err) {
    console.error(err.message);
  }
};

const sendPackageDetails = async (data) => {
  const {
    userId,
    files,
    firstName,
    lastName,
    email,
    telephone,
    company,
    pickupAddress,
    pickupCity,
    pickupState,
    postCode,
    receiverTelephone,
    deliveryAddress,
    deliveryCity,
    deliveryState,
    receiverCode,
    description,
  } = data;
  try {
    const connection = await pool.getConnection();
    await connection.beginTransaction();
    const logistics_query = `INSERT INTO logistics (userId, files, firstName, lastName, email, telephone, company, pickupAddress, pickupCity, pickupState, postcode, receiverTelephone, deliveryAddress, deliveryCity, deliveryState, receiverCode, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? ,?, ?, ?, ?, ?, ?, ?)`;
    const new_logistics_user = await pool.query(logistics_query, [
      userId,
      files,
      firstName,
      lastName,
      email,
      telephone,
      company,
      pickupAddress,
      pickupCity,
      pickupState,
      postCode,
      receiverTelephone,
      deliveryAddress,
      deliveryCity,
      deliveryState,
      receiverCode,
      description,
    ]);
    return new_logistics_user[0].insertId;
  } catch (err) {
    console.error(err);
    throw err.message;
  }
};

const getAllPackage = async () => {
  const query = 'SELECT * FROM logistics';
  const connection = await pool.getConnection();
  const [users] = await connection.query(query);
  await connection.release();
  return users;
};

const packageDetailById = async (id) => {
  let connection = await pool.getConnection();
  (await connection).beginTransaction();
  let get_package = await connection.query(
    `SELECT * FROM logistics id = ${id}`
  );
  await connection.release();
  return get_package;
};

const getAUserPackage = async (userId) => {
  let connection = await pool.getConnection();
  (await connection).beginTransaction();
  let get_user_package = await connection.query(
    `SELECT * FROM logistics WHERE userId = '${userId}'`
  );
  await connection.release();
  return get_user_package[0];
};

const updatePackageStatus = async (id, status) => {
  try {
    let connection = await pool.getConnection();
    (await connection).beginTransaction();
    const query = `UPDATE logistics SET status = ? WHERE id = ?`;
    await pool.query(query, [status, id]);
    await connection.release();
  } catch (err) {
    throw err.message;
  }
};

const setPackageReference = async (referenceId, id) => {
  console.log(referenceId, id);
  try {
    let connection = await pool.getConnection();
    (await connection).beginTransaction();
    const query = `UPDATE logistics SET referenceId = ? WHERE id = ?`;
    await pool.query(query, [referenceId, id]);
    await connection.release();
  } catch (err) {
    throw err.message;
  }
};
const updatePackagePayment = async (paid, id) => {
  try {
    let connection = await pool.getConnection();
    (await connection).beginTransaction();
    const query = `UPDATE logistics SET paid = ? WHERE id = ?`;
    await pool.query(query, [paid, id]);
    await connection.release();
  } catch (err) {
    throw err.message;
  }
};

module.exports = {
  createTableLogistics,
  sendPackageDetails,
  getAllPackage,
  packageDetailById,
  getAUserPackage,
  updatePackageStatus,
  setPackageReference,
  updatePackagePayment,
};
