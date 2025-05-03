"use strict";

exports.formatarNome = function (nome) {
  var primeiroNome = "".concat(nome.split(" ")[0]);
  var index = nome.split(" ")[1].toLowerCase() == 'da' || nome.split(" ")[1].toLowerCase() == 'de' ? 2 : 1;
  var segundoNome = "".concat(nome.split(" ")[index]);
  var nomeFormatado = "".concat(primeiroNome, " ").concat(segundoNome);
  return nomeFormatado;
};