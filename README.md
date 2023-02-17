# stock-notification-ws
A websocket server that sends stock price updates to clients.

# Getting Started
To run stock-notification-ws

```bash
npm i
```
After the package is installed.
```bash
adjust the configuration to sample.env
mv sample.env .env
```
Run the server
```bash
npm run start:dev
```
Listen to the websocket
```bash
wscat -c ws://localhost:3000
```
# Testing
To run the test
```bash
npm run test
```
