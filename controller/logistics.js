const { packageValidation } = require('../validation/logistics');
const {
  sendPackageDetails,
  setPackageReference,
  getAUserPackage,
  updatePackagePayment,
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
    let initialize_payment = await initializePaystackTransaction(req);
    //set references on db
    await setPackageReference(initialize_payment?.data?.reference, packagesId);
    res.status(201).json({ msg: initialize_payment?.data?.authorization_url });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const ReceiveUserPackage = async (req, res) => {
  try {
    let userPackage = await getAUserPackage(req.user.id);
    userPackage.forEach(async (pack) => {
      let paid = convertBufferToBoolean(pack?.paid);
      if (!paid) {
        let confirm_payment = await verifyPaystackTransaction(
          pack?.referenceId
        );
        if (confirm_payment.status && confirm_payment?.data.status == 'success')
          await updatePackagePayment(true, pack?.id);
      }
    });

    //refetch userPackage
    userPackage = await getAUserPackage(req.user.id);
    res.status(200).json({ msg: userPackage });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = { PackageSent, ReceiveUserPackage };
