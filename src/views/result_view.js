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
