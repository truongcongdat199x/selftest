'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(
    `<body style='background-color:#283E5B'><h1 style='color: orange;text-align:center'>Hello ${process.env.NAMEE} today is ${process.env.NOW} ohmygod ${os.hostname()}</h1></body>`
  );
});

const dotenv = require('dotenv');
dotenv.config();
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
