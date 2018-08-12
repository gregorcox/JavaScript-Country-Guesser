const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:found-country', (evt) => {
    const country = evt.detail;
    this.render(country);
  })

  PubSub.subscribe('Countries:array-length', (evt) => {
    const score = 53 - evt.detail;
    console.log(score);
    this.count(score);
  })

};

ResultView.prototype.render = function (country) {

  const countryList = document.createElement("ul");
  const countryName = document.createElement('li');
  countryName.textContent = `${country.name}`;

  countryList.appendChild(countryName);
  this.container.appendChild(countryList);
};

ResultView.prototype.count = function (score) {

  const counter = document.querySelector("#counter");
  counter.textContent = `Score: ${score}/52`;

};



module.exports = ResultView;
