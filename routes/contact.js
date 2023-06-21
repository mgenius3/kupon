const router = require("express").Router();

const { newContactMessageSent } = require("../controller/contact");

router.post("/message", newContactMessageSent);

module.exports = router;
