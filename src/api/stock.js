require('dotenv').config();
const axios = require('axios');
const config = require('config');

const {
  api: {
    url,
    pageLimit,
    offset,
  },
} = config;

/**
 * Calls the stock market API to get stock information.
 *
 * @async
 * @function getStock
 * @returns {Promise<string>} A promise that resolves to a JSON string containing the stock information.
 * @throws {Error} If there is an error calling the stock market API.
 */
const getStock = async () => {
  const response = await axios.post(url, {
    fromdate: '',
    toDate: '',
    stockSymbol: '',
    offset,
    limit: pageLimit,
  });
  return JSON.stringify(response.data);
};

module.exports = {
  getStock,
};
