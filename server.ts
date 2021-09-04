import app from './src';
const port = process.env.PORT || 3020;
import http from 'http'
const logger = require('turbo-logger').createStream({});

const server : http.Server = http.createServer(app);

server.listen(port, () => {
  logger.log('server started on port ', port)
})