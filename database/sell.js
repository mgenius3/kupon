const fs = require('fs');
const path = require('path');

const filePath = './data/sell.json';

//create table sell
const createTableSell = async () => {
  try {
    const checkFileExists = fs.existsSync(filePath);
    if (!checkFileExists) {
      const data = JSON.stringify({ sells: [] });
      fs.writeFileSync(filePath, data);
    }
  } catch (err) {
    console.error(err.message);
  }
};

const sendPackageDetails = async (data) => {
  try {
    const rawData = fs.readFileSync(filePath);
    const sellData = JSON.parse(rawData);

    const newSell = {
      id: sellData.sells ? sellData.sells.length + 1000 : 1000,
      paid: false,
      referenceId: null,
      created_at: new Date().toISOString(),
      ...data,
    };
    sellData.sells.push(newSell);

    const newData = JSON.stringify(sellData);
    fs.writeFileSync(filePath, newData);
    return newSell.id;
  } catch (err) {
    throw err.message;
  }
};

const getAllSell = async () => {
  try {
    const rawData = fs.readFileSync(filePath);
    const sellData = JSON.parse(rawData);
    return sellData.sells;
  } catch (err) {
    throw err.message;
  }
};

const sellDetailById = async (id) => {
  try {
    const rawData = fs.readFileSync(filePath);
    const sellData = JSON.parse(rawData);
    const sell = sellData.sells.find((sell) => sell.id === id);
    return sell;
  } catch (err) {
    throw err.message;
  }
};

const getAUserSell = async (sellerId) => {
  try {
    const rawData = fs.readFileSync(filePath);
    const sellData = JSON.parse(rawData);
    const userSells = sellData.sells.filter(
      (sell) => sell.sellerId === sellerId
    );
    return userSells;
  } catch (err) {
    throw err.message;
  }
};

const setPackageReference = async (referenceId, id) => {
  try {
    const rawData = fs.readFileSync(filePath);
    const sellData = JSON.parse(rawData);
    const updatedSells = sellData.sells.map((sell) => {
      if (sell.id === id) {
        sell.referenceId = referenceId;
      }
      return sell;
    });
    const newData = JSON.stringify({ sells: updatedSells });
    fs.writeFileSync(filePath, newData);
  } catch (err) {
    throw err.message;
  }
};
const updatePackagePayment = async (paid, id) => {
  try {
    const rawData = fs.readFileSync(filePath);
    const sellData = JSON.parse(rawData);
    const updatedSells = sellData.sells.map((sell) => {
      if (sell.id === id) {
        sell.paid = paid;
      }
      return sell;
    });
    const newData = JSON.stringify({ sells: updatedSells });
    fs.writeFileSync(filePath, newData);
  } catch (err) {
    throw err.message;
  }
};

// const deletePackage = async (id) => {
//   try {
//     const rawData = fs.readFileSync(filePath);
//     const sellData = JSON.parse(rawData);
//     const updatedSells = sellData.sells.filter((sell) => sell.id !== id);
//     const newData = JSON.stringify({ sells: updatedSells });
//     fs.writeFileSync(filePath, newData);
//   } catch (err) {
//     throw err.message;
//   }
// };

const deletePackage = async (id) => {
  try {
    let data = fs.readFileSync(filePath, 'utf8');
    let { sells: packages } = JSON.parse(data);
    let index = -1;
    for (let i = 0; i < packages.length; i++) {
      console.log(packages);
      if (packages[i].id == id) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      packages.splice(index, 1);
      fs.writeFileSync(filePath, JSON.stringify(packages));
    } else throw new Error('not found');
  } catch (err) {
    console.log(err.message);
    throw err.message;
  }
};
module.exports = {
  createTableSell,
  sendPackageDetails,
  getAllSell,
  sellDetailById,
  getAUserSell,
  setPackageReference,
  updatePackagePayment,
  deletePackage,
};
