"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getDateFormated() {
  var dataStr = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  });

  var _dataStr$split$0$spli = dataStr.split(' ')[0].split('/'),
      _dataStr$split$0$spli2 = _slicedToArray(_dataStr$split$0$spli, 3),
      dia = _dataStr$split$0$spli2[0],
      mes = _dataStr$split$0$spli2[1],
      ano = _dataStr$split$0$spli2[2]; // Obtém data formatada


  var months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  return "".concat(dia, " de ").concat(months[parseInt(mes) - 1], " de ").concat(ano).replace(",", "");
}

module.exports = {
  getDateFormated: getDateFormated
};