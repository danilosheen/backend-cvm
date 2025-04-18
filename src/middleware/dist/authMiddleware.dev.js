"use strict";

var jwt = require("jsonwebtoken");

var SECRET = process.env.JWT_SECRET;

module.exports = function (req, res, next) {
  var authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Token não fornecido"
    });
  }

  var token = authHeader.split(" ")[1];

  try {
    var decoded = jwt.verify(token, SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        error: "Token expirado"
      });
    }

    return res.status(401).json({
      error: "Token inválido"
    });
  }
};