require('dotenv').config();
const { Server } = require('ws');
const config = require('config');
const { stockApi } = require('./apis');

const {
  constant: {
    DEFAULT_INTERVAL,
  },
  env: {
    port,
  },
} = config;
const webSocketServer = new Server({ port });
webSocketServer.on('connection', async (ws) => {
  ws.send(await stockApi.getStock());

  const updateStockData = setInterval(async () => {
    ws.send(await stockApi.getStock());
  }, DEFAULT_INTERVAL);

  ws.on('close', () => {
    clearInterval(updateStockData);
  });
});
