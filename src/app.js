const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const countries = new Countries();
  countries.getData();
  // countries.bindEvents();


})
