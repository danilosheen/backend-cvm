"use strict";

function porExtensoFormatado(string) {
  var stringPorExtensoFormatada = string.replace(/(^\w{1})|(\s+)(\w{1})/g, function (_, p1, p2, p3) {
    // Se p1 estiver definido, significa que é a primeira letra da string.
    if (p1) {
      return p1.toUpperCase() === 'E' ? 'e' : p1.toUpperCase();
    } // p2 representa o(s) espaço(s) e p3 a letra.


    var letra = p3.toUpperCase() === 'E' ? 'e' : p3.toUpperCase();
    return p2 + letra;
  });
  return stringPorExtensoFormatada;
}

module.exports = porExtensoFormatado;