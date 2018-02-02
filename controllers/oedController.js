// Route to fetch word data from external Oxford English Dictionary API
const requestP = require('request-promise-native');

const headers = {
  "Accept": "application/json",
  "app_id": "0221faad",
  "app_key": "e4af98008c290b83307d432a537cf190"
}

module.exports = {
  lookup: word => {
    return requestP({
      uri: 'https://od-api.oxforddictionaries.com:443/api/v1/entries/en/' + word + '/regions=us',
      headers: headers
    });
  }
}