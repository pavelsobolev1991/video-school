const serviceRouter = require('express').Router();
const { Service } = require('../../db/models');
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const token = '5994426081:AAFs3sEngrgMO9C3mJcYU8O4bMVeQA5sCME';
const bot = new TelegramBot(token, { polling: true });
// chatId = 938200525;

const url = `https://api.telegram.org/bot${token}/sendMessage`;

serviceRouter.post('/service', async (req, res) => {
  const { username, phone, link } = req.body.data;
  await Service.create({
    username: username,
    phone: phone,
    link: link,
  });

  //получение chatID
  // let chatId;
  bot.on('message', (msg) => {
    chatId = msg.chat.id;
    console.log('chatID 1', chatId);
  });

  const params = {
    chat_id: chatId,
    text: `Новый заказ услуги:\n\nИмя: ${username}\nТелефон: ${phone}\nСсылка: ${link}`,
  };
  
  axios
    .post(url, params)
    .then((response) => {
      console.log('Сообщение отправлено успешно:', response.data);
    })
    .catch((error) => {
      console.error('Ошибка отправки сообщения:', error);
    });

  res.send('sucess');
});

module.exports = serviceRouter;
