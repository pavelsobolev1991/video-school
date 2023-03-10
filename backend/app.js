require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', function (req, res) {
  const response = { message: 'Hello! I am from backend' };
  res.json(response);
});

app.listen(PORT, async () => console.log(`Server started at ${PORT} port`));
