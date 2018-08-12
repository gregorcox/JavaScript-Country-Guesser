const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const countryForm = document.querySelector('#form');

  const selectView = new SelectView(countryForm);
  selectView.bindEvents();

  const countryContainer = document.querySelector('#country-container');
  const resultView = new ResultView(countryContainer);
  resultView.bindEvents();

  const countries = new Countries();
  countries.getData();
  countries.bindEvents();




})
