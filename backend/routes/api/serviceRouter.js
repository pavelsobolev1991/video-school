const serviceRouter = require('express').Router();

serviceRouter.post('/service', async (req, res) => {
  console.log('req.body', req.body)
  res.send('sucess');
})

module.exports = serviceRouter;
