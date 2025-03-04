"use strict";

function getDateFormated() {
  var data = new Date();
  var dia = "".concat(data.getDate()).padStart(2, "0");
  var mes = data.getMonth();
  var ano = data.getFullYear();
  var months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  var dataGeracao = "".concat(dia, " de ").concat(months[mes], " de ").concat(ano);
  return dataGeracao;
}

module.exports = {
  getDateFormated: getDateFormated
};