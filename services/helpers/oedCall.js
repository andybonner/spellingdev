// Route to fetch word data from external Oxford English Dictionary API
const request = require('request');

const headers = {
  "Accept": "application/json",
  "app_id": "0221faad",
  "app_key": "e4af98008c290b83307d432a537cf190"
}

module.exports = {
  lookup: (word, callback) => {
    const options = {
      uri: 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + word + '/regions%3Dus%3Bpronunciations%3Bdefinitions%3Bexamples',
      headers: headers
    }

    return request(options, (error, response, body) => {
      // TODO: error handling
      callback(JSON.parse(body));
    });
  }
}