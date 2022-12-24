import { Server } from 'ws';
import config from 'config';

const {
  constant: {
    DEFAULT_INTERVAL,
  },
  env: {
    port,
  },
} = config;

const webSocketServer = Server(port);
let stockData = 'TODO';

webSocketServer.on('connection', (ws) => {
  ws.send(stockData);

  const updateStockData = setInterval(() => {
    stockData = 'TODO Update';
    ws.send(stockData);
  }, DEFAULT_INTERVAL);

  ws.on('close', () => {
    clearInterval(updateStockData);
  });
});
