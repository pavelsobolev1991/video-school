require('@babel/register');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');

const express = require('express');
const logger = require('morgan');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 4000;

const serviceRouter = require('./routes/api/serviceRouter');

app.get('/', function (req, res) {
  const response = { message: 'Hello! I am from backend' };
  res.json(response);
});

// Подключаем use
app.use('/api', serviceRouter);

app.listen(PORT, async () => console.log(`Server started at ${PORT} port`));
