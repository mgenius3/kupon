const verifyToken = require('../middleware/admin');
const router = require('express').Router();

const {
  getAllPackages: getAllLogisticsPackages,
  packageStatusUpdate,
  deleteUserPackage: deleteLogisticsUserPackage,
} = require('../controller/logistics');

const {
  deleteUserPackage: deleteMarketUserPackage,
} = require('../controller/sell');
const { allSellPackages: getAllSellPackages } = require('../controller/sell');
const { allUsers, delUser } = require('../controller/auth');
const { countPackages } = require('../controller/auth');
router.use(verifyToken);
router.get('/logistics', getAllLogisticsPackages);
router.patch('/logistics/update_status', packageStatusUpdate);
router.delete('/logistics/delete/:id', deleteLogisticsUserPackage);

router.get('/market', getAllSellPackages);
router.delete('/market/delete/:id', deleteMarketUserPackage);

router.get('/user', allUsers);
router.delete('/user/delete/:id', delUser);
router.get('/count_packages', countPackages);

module.exports = router;
