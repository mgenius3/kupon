const { packageValidation } = require("../validation/sell");
const {
  sendPackageDetails,
  getAllSell,
  sellDetailById,
  setPackageReference,
  getAUserSell,
  updatePackagePayment,
  deletePackage,
} = require("../database/sell");

const {
  initializePaystackTransaction,
  verifyPaystackTransaction,
} = require("../utils/payment");

const { convertBufferToBoolean } = require("../utils/booleanBuffer");

const packageSent = async (req, res) => {
  req.body.sellerId = req.user.id; //pass in seller Id
  try {
    await packageValidation(req.body);
    let packagesId = await sendPackageDetails(req.body);
    //initialize payment
    let initialize_payment = await initializePaystackTransaction(
      req,
      "market",
      20000
    );

    if (initialize_payment.data != undefined) {
      await setPackageReference(initialize_payment.data.reference, packagesId);
    } else {
      throw new Error("Data uploaded, but error in making payment");
    }
    //set references on db
    res.status(201).json({ msg: initialize_payment.data.authorization_url });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const receiveUserPackage = async (req, res) => {
  try {
    let userPackage = await getAUserSell(req.user.id);
    await userPackage.forEach(async (pack) => {
      let paid = convertBufferToBoolean(pack.paid);
      if (!paid) {
        let confirm_payment = await verifyPaystackTransaction(pack.referenceId);
        if (confirm_payment.status && confirm_payment.data.status == "success")
          await updatePackagePayment(true, pack.id);
      }
    });

    //refetch userPackage
    userPackage = await getAUserSell(req.user.id);
    //convert paid to boolean before sending to client side
    userPackage.forEach(
      (pack) => (pack.paid = convertBufferToBoolean(pack.paid))
    );

    // userPackage = userPackage.filter((a) => a.paid);

    res.status(200).json({ msg: userPackage });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};
const receivePackage = async (req, res) => {
  try {
    const user = await getAllSell();
    user.forEach((pack) => (pack.paid = convertBufferToBoolean(pack.paid)));

    let paid_user_package = user.filter((a) => a.paid);
    res.status(200).json({ msg: paid_user_package });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const getParticularPackage = async (req, res) => {
  try {
    const { id } = req.params;
    let packages = await sellDetailById(id);
    res.status(200).json({ msg: packages[0] });
  } catch (err) {
    throw Error(err.message);
  }
};

const payment = async (req, res) => {
  try {
    let { id: packagesId } = req.params;
    //initialize payment
    let initialize_payment = await initializePaystackTransaction(
      req,
      "market",
      20000
    );

    if (initialize_payment.data != undefined) {
      await setPackageReference(initialize_payment.data.reference, packagesId);
    } else {
      throw new Error("Data uploaded, but error in making payment");
    }

    res.status(201).json({ msg: initialize_payment.data.authorization_url });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const deleteUserPackage = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePackage(id);
    res.status(200).json({ msg: "deleted successfully" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const allSellPackages = async (req, res) => {
  try {
    const packages = await getAllSell();
    packages.forEach((pack) => (pack.paid = convertBufferToBoolean(pack.paid)));
    res.status(200).json({ msg: packages });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = {
  receiveUserPackage,
  receivePackage,
  packageSent,
  getParticularPackage,
  payment,
  deleteUserPackage,
  allSellPackages,
};
