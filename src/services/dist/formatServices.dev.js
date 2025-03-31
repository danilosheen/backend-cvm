"use strict";

function formatServices(itens) {
  if (itens.length === 1) return (itens[0] + ".").toUpperCase();
  var ultimaPalavra = itens.pop();
  return (itens.join(", ") + " e " + ultimaPalavra + ".").toUpperCase();
}

function upperCase(string) {
  return string.toUpperCase();
}

module.exports = {
  formatServices: formatServices,
  upperCase: upperCase
};