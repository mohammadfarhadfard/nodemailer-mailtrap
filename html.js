let htmlVar = `
  <div style="width: 600px; margin: 40px auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <h1 style="color: #D2691E; text-align: center; font-size: 24px; margin-bottom: 20px;">BTC Price Alert</h1>
    <div style="background-color: #f2f2f2; padding: 20px; border-radius: 10px;">
      <p style="text-align: center; font-size: 18px; margin-bottom: 20px;">The current price of BTC is:</p>
      <h2 style="text-align: center; font-size: 36px; margin-bottom: 20px; color: #D2691E;">97000</h2>
    </div>
    <img src="cid:uniq-mailtrap2.png" alt="mailtrap" style="display: block; margin: 0 auto; width: 200px; height: 200px; border-radius: 50%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <p style="text-align: center; font-size: 14px; margin-top: 20px;">This email was sent to you because the price of BTC exceeded the threshold.</p>
    <div style="text-align: center; margin-top: 20px;">
      <a href="https://www.kucoin.com/price/BTC" style="background-color: #D2691E; color: #fff; padding: 10px 20px; border-radius: 10px; text-decoration: none;">View More</a>
    </div>
  </div>
`;

module.exports = { htmlVar };





