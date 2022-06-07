const express = require('express');
const app = express();

app.use(require("./usuarios/route_user"));

module.exports = app;
