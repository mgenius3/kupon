const { packageValidation } = require('../validation/sell');
const {
  sendPackageDetails,
  getAllSell,
  sellDetailById,
} = require('../database/sell');

const packageSent = async (req, res) => {
  req.body.sellerId = req.user.id; //pass in seller Id
  try {
    await packageValidation(req.body);
    await sendPackageDetails(req.body);
    res.status(201).json({ msg: 'successful' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: err.message });
  }
};

const receivePackage = async (req, res) => {
  console.log('sell');
  try {
    const user = await getAllSell();
    res.status(200).json({ msg: user });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const getParticularPackage = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    let packages = await sellDetailById(id);
    res.status(200).json({ msg: packages[0] });
  } catch (err) {
    throw Error(err.message);
  }
};
module.exports = { receivePackage, packageSent, getParticularPackage };
