const router = require('express').Router();

const {
  RegisterNewUser,
  LoginUser,
  getUserById,
} = require('../controller/auth');

router.post('/register', RegisterNewUser);
router.post('/login', LoginUser);
router.get('/:id', getUserById);
module.exports = router;
