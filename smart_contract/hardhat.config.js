const dotenv = require("dotenv");
dotenv.config({ path: __dirname + '/.env' });
require('@nomiclabs/hardhat-waffle');

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};