const verifyToken = require('../middleware/auth');
const router = require('express').Router();

const {
  receivePackage,
  packageSent,
  getParticularPackage,
} = require('../controller/sell');

router.get('/', receivePackage);
router.get('/:id', verifyToken, getParticularPackage);
router.post('/', verifyToken, packageSent);

module.exports = router;
