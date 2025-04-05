"use strict";

function converteStringToFloat(string) {
  var stringLimpa = string.replace(/\./g, '');
  var number = parseFloat(stringLimpa.replace(",", "."));
  return number;
}

function converteFloatToString(number) {
  return number.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

module.exports = {
  converteFloatToString: converteFloatToString,
  converteStringToFloat: converteStringToFloat
};