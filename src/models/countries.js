const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Countries = function () {
  this.countries = [];
}

Countries.prototype.getData = function () {
  const url = 'https://restcountries.eu/rest/v2/region/europe';
  const request = new Request(url);
  request.get()
    .then((data) => {
      this.countries = data;
      PubSub.publish('Countries:country-data-loaded', this.countries);
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = Countries;
