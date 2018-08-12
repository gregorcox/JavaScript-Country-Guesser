const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element){
  this.element = element;
}


SelectView.prototype.bindEvents = function () {
  this.element.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const country = event.target['country-input'].value;
    PubSub.publish('SelectView:form-submitted', country);
    this.element.reset();
  });
}

module.exports = SelectView;
