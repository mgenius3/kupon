const express = require('express');
// const bodyParser = require('body-parser');
const next = require('next');
const dotenv = require('dotenv');
const dev = process.env.NODE_ENV !== 'production';

dotenv.config();
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const errorHandler = require('./middleware/errorHandler');
const morgan = require('morgan');
const { createTableUser } = require('./database/auth');
const { createTableLogistics } = require('./database/logistics');
const { createTableSell } = require('./database/sell');

app.prepare().then(() => {
  const server = express();

  //Create Table for User
  createTableUser();
  createTableLogistics();
  createTableSell();

  server.use(morgan('dev'));
  // Middleware to parse JSON request body
  // server.use(bodyParser.json());
  server.use(express.json({ limit: '10mb' }));
  server.use('/logistic', require('./routes/logistics'));
  //Create Table for Sell
  server.use('/sell', require('./routes/sell'));
  server.use('/user', require('./routes/auth'));

  //Create Table for Logistics

  // Default route handler
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  //error handling
  server.use(errorHandler);

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
  // .setTimeout(300000); //set connection timeout to 5mins
});
