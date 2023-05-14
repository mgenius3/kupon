const { packageValidation } = require('../validation/logistics');
const {
  sendPackageDetails,
  setPackageReference,
  getAUserPackage,
  updatePackagePayment,
  getAllPackage,
  updatePackageStatus,
  deleteLogisticsPackage,
} = require('../database/logistics');
const {
  initializePaystackTransaction,
  verifyPaystackTransaction,
} = require('../utils/payment');
const { convertBufferToBoolean } = require('../utils/booleanBuffer');

const PackageSent = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    await packageValidation(req.body);
    let packagesId = await sendPackageDetails(req.body);
    //initialize payment
    let initialize_payment = await initializePaystackTransaction(
      req,
      'logistics',
      20000
    );
    //set references on db
    await setPackageReference(initialize_payment.data.reference, packagesId);
    res.status(201).json({ msg: initialize_payment.data.authorization_url });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const ReceiveUserPackage = async (req, res) => {
  try {
    let userPackage = await getAUserPackage(req.user.id);
    userPackage.forEach(async (pack) => {
      let paid = convertBufferToBoolean(pack.paid);
      if (!paid) {
        let confirm_payment = await verifyPaystackTransaction(pack.referenceId);
        if (confirm_payment.status && confirm_payment.data.status == 'success')
          await updatePackagePayment(true, pack.id);
      }
    });

    //refetch userPackage
    userPackage = await getAUserPackage(req.user.id);
    //convert paid to boolean before sending to client side
    userPackage.forEach(
      (pack) => (pack.paid = convertBufferToBoolean(pack.paid))
    );
    res.status(200).json({ msg: userPackage });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const getAllPackages = async (req, res) => {
  try {
    const allPackages = await getAllPackage();
    res.status(200).json({ msg: allPackages });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const packageStatusUpdate = async (req, res) => {
  try {
    const { id, status } = req.body;
    await updatePackageStatus(id, status);
    res.status(200).json({ msg: 'successful' });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const payment = async (req, res) => {
  try {
    let { id: packagesId } = req.params;
    //initialize payment
    let initialize_payment = await initializePaystackTransaction(
      req,
      'logistics',
      20000
    );
    //set references on db
    await setPackageReference(initialize_payment.data.reference, packagesId);
    res.status(201).json({ msg: initialize_payment.data.authorization_url });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const deleteUserPackage = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteLogisticsPackage(id);
    res.status(200).json({ msg: 'deleted successfully' });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
module.exports = {
  PackageSent,
  ReceiveUserPackage,
  getAllPackages,
  packageStatusUpdate,
  payment,
  deleteUserPackage,
};
