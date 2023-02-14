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

// create a function to call post api to get stock
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
