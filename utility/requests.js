const $ = require('jquery');
const planes = require('../data/planes.json');
const jace = require('../data/jace.json');

function requestLayout(layout) {
  // return $.getJSON(`https://api.magicthegathering.io/v1/cards?layout=${layout}`);
  return new Promise(resolve => resolve(planes));
}

function searchRequest(searchType, searchText) {
  return $.getJSON(`https://api.magicthegathering.io/v1/cards?${searchType}=${searchText}`);
  // return new Promise(resolve => resolve(jace));
}

module.exports.layout = requestLayout;
module.exports.searchRequest = searchRequest;
