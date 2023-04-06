const { packageValidation } = require('../validation/logistics');
const { sendPackageDetails } = require('../database/logistics');
const PackageSent = async (req, res) => {
  req.body.userId = req.user.id;
  try {
    await packageValidation(req.body);
    let packages = await sendPackageDetails(req.body);
    if (packages) res.status(201).json({ msg: 'successful' });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = { PackageSent };
