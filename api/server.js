const express = require('express');

const hubsRouter = require('../hubs/hubs-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

//only USE (.use) if matches path
//when you wanna use x (below), use hubsRouter
server.use('/api/hubs', hubsRouter)


// export default server;
module.exports = server;