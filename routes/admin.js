const verifyToken = require('../middleware/admin');
const router = require('express').Router();

const {
  getAllPackages: getAllLogisticsPackages,
  packageStatusUpdate,
} = require('../controller/logistics');

const { allSellPackages: getAllSellPackages } = require('../controller/sell');
const { allUsers } = require('../controller/auth');
const { countPackages } = require('../controller/auth');
router.use(verifyToken);
router.get('/logistics', getAllLogisticsPackages);
router.patch('/logistics/update_status', packageStatusUpdate);
router.get('/market', getAllSellPackages);
router.get('/user', allUsers);
router.get('/count_packages', countPackages);

module.exports = router;
