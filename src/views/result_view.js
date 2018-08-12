const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:found-country', (evt) => {
    const country = evt.detail;
    this.render(country);
  })

};

ResultView.prototype.render = function (country) {

  const countryList = document.createElement("ul");
  const countryName = document.createElement('li');
  countryName.textContent = `${country.name}`;

  countryList.appendChild(countryName);
  this.container.appendChild(countryList);

};

module.exports = ResultView;
