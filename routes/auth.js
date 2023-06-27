const router = require("express").Router();

const {
  RegisterNewUser,
  LoginUser,
  getUserById,
} = require("../controller/auth");

const verifyToken = require("../middleware/auth");
router.post("/register", RegisterNewUser);
router.post("/login", LoginUser);
router.get("/:id", verifyToken, getUserById);

module.exports = router;
