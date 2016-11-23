const $ = require('jquery');
const _ = require('lodash');

const plancechase = require('./js/planechase.js');
const search = require('./js/search.js');

$(document).ready(function() {
  $('#search').click(search.search);

  $('#random').click(plancechase.randomImage);
  $('#shuffle').click(plancechase.shuffleDeck);
  $('#fill').click(plancechase.fillDeck);
});
