let nodemailer = require('nodemailer');
require('dotenv').config()
const axios = require('axios')
const { htmlVar } = require('./html')

let transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER_mail,
    pass: process.env.PASS_mail
  }
});

setInterval(() => {
  let kucoinApi = `https://api.kucoin.com/api/v1/market/orderbook/level1?symbol=BTC-USDT`
    axios.get(kucoinApi)
    .then(function(response){
      global.BTCprices = response.data.data.price
    })
    .catch(error => {
      console.log("err : " +error);
    }) 
    // console.log(global.BTCprices);
}, 2000);

let mailOptions = {
  from: '<sajad3@gamil.com>',
  to: 'mohammad2@gamil.com',
  subject: 'Nice Nodemailer test',
  text: 'Hey the price of btc more than 56000',
  html: htmlVar,
  attachments: [
    {
      filename: 'mailtrap2.png',
      path: __dirname + '/mailtrap2.png',
      cid: 'uniq-mailtrap2.png' 
    }
  ]
};


setTimeout(() => {
  if(global.BTCprices > '56000' ){
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
    }
}, 4000);
//<b>Hey there! </b><br> <p>the price of btc more than 56000</p><br /><img src="cid:uniq-mailtrap2.png" alt="mailtrap" style="max-width:100%" />
