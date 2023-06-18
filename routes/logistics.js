const verifyToken = require("../middleware/auth");
const router = require("express").Router();

const {
  PackageSent,
  ReceiveUserPackage,
  payment,
  trackPackageSent,
} = require("../controller/logistics");

router.post("/send", verifyToken, PackageSent);
router.get("/user", verifyToken, ReceiveUserPackage);
router.get("/pay/:id", verifyToken, payment);
router.post("/track_package", trackPackageSent);

module.exports = router;
