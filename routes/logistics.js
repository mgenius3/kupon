const verifyToken = require('../middleware/auth');
const router = require('express').Router();

const {
  PackageSent,
  ReceiveUserPackage,
  payment,
} = require('../controller/logistics');

router.use(verifyToken);
router.post('/send', PackageSent);
router.get('/user', ReceiveUserPackage);
router.get('/pay/:id', verifyToken, payment);
module.exports = router;
