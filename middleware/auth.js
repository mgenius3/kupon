const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res
      .status(403)
      .json({ msg: 'A token is required for authentication' });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.dir(err);
    return res.status(401).json({ msg: 'Invalid Token' });
  }
  return next();
};

module.exports = verifyToken;
