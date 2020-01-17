const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

require('dotenv/config');

const app = express();
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster-jwyto.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(cors({ origin: process.env.ORIGIN_URL }))
app.use(express.json());
app.use(routes);

server.listen(process.env.APP_PORT, () => {
  console.log('Servidor funcionando na porta ' + process.env.APP_PORT)
});
