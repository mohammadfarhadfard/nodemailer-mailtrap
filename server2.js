let nodemailer = require('nodemailer');
require('dotenv').config()
const axios = require('axios')
const { htmlVar } = require('./html')
const { pool } = require('./dbConfig')

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

    pool.query(
      `UPDATE btc_price SET online_price = $1`,[global.BTCprices],(error,result) => {
        if (error) throw error;
        // console.log('updated');
      }
    )
}, 2500);

let mailOptions = {
  from: '<sajad3@gamil.com>',
  to: 'mohammad2@gamil.com',
  subject: 'Nice Nodemailer test',
  text: 'Hey the price of btc more than 60000',
  html: htmlVar,
  attachments: [
    {
      filename: 'mailtrap2.png',
      path: __dirname + '/mailtrap2.png',
      cid: 'uniq-mailtrap2.png' 
    }
  ]
};

let price = [];

setTimeout(() => {

  pool.query(
    `SELECT * FROM btc_price` , price , (err,results) =>{
      if (err) throw err;
      price.push(price)
      // console.log(results.rows);
    }
  )

  if(global.BTCprices > price ){
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
    }
}, 5000);
