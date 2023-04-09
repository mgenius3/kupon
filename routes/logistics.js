const verifyToken = require('../middleware/auth');
const router = require('express').Router();

const { PackageSent, ReceiveUserPackage } = require('../controller/logistics');

router.use(verifyToken);
router.post('/send', PackageSent);
router.get('/user', ReceiveUserPackage);
module.exports = router;
