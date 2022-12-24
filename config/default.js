export default {
  env: {
    mode: process.env.NODE_ENV,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
  },
  constant: {
    DEFAULT_INTERVAL: 10,
  },
  api: {
    url: process.env.STOCK_API,
    pageLimit: 500,
  },
};
