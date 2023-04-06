const verifyToken = require('../middleware/auth');
const router = require('express').Router();

const { PackageSent } = require('../controller/logistics');

router.use(verifyToken);
router.post('/', PackageSent);
module.exports = router;
