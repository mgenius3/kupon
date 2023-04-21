const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.headers.authorization &&
    req.headers.authorization.replace('Bearer ', '');

  if (!token) {
    res.status(403).json({ msg: 'A token is required for authentication' });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
    if (req.user.admin == 'yes') next();
    else throw new Error('Unauthorized to access this page');
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};

module.exports = verifyToken;
