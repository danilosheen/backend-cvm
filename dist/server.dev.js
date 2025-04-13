"use strict";

var app = require("./src/app");

var dotenv = require("dotenv");

dotenv.config();
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  return console.log("Servidor rodando na porta ".concat(PORT));
});
module.exports = app;