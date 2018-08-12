const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');

const Countries = function () {
  this.countries = [];
}

function remove(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
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

Countries.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:form-submitted', (evt) => {
    const selectedCountry = evt.detail;
    this.findCountryByIndex(selectedCountry);
    console.log(selectedCountry);
  })

};

Countries.prototype.findCountryByIndex = function (name) {
  for (country of this.countries){
    if (country.name == name) {
      PubSub.publish('Countries:found-country', country)
      remove(this.countries, country);
    }
  }
};


module.exports = Countries;
