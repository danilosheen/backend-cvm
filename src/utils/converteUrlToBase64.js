const axios = require('axios');

async function urlToBase64(url) {
  const response = await axios.get(url, {
    responseType: 'arraybuffer',
  });

  const contentType = response.headers['content-type'];
  const base64 = Buffer.from(response.data, 'binary').toString('base64');

  return `data:${contentType};base64,${base64}`;
}

module.exports = {
  urlToBase64
}