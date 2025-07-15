"use strict";

var axios = require('axios');

function urlToBase64(url) {
  var response, contentType, base64;
  return regeneratorRuntime.async(function urlToBase64$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get(url, {
            responseType: 'arraybuffer'
          }));

        case 2:
          response = _context.sent;
          contentType = response.headers['content-type'];
          base64 = Buffer.from(response.data, 'binary').toString('base64');
          return _context.abrupt("return", "data:".concat(contentType, ";base64,").concat(base64));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}

module.exports = {
  urlToBase64: urlToBase64
};