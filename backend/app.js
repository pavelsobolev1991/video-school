require('dotenv').config();
const path = require('path');

const express = require('express');
const logger = require('morgan');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.static(path.join(__dirname, '../public')));


const PORT = process.env.PORT || 4000;

app.get('/api', function (req, res) {
  const response = { message: 'Hello! I am from backend' };
  res.json(response);
});

app.listen(PORT, async () => console.log(`Server started at ${PORT} port`));
