const serviceRouter = require('express').Router();
const { Service } = require('../../db/models');

serviceRouter.post('/service', async (req, res) => {
  const { username, phone, link } = req.body.data;
  await Service.create({
    username: username,
    phone: phone,
    link: link,
  });
  res.send('sucess');
});

module.exports = serviceRouter;
