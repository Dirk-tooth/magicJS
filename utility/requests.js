const $ = require('jquery');
const planes = require('../data/planes.json');
const jace = require('../data/jace.json');

function requestLayout(layout) {
  console.log($.getJSON(`https://api.magicthegathering.io/v1/cards?layout=${layout}&set=pca`));
	// TODO: include "set: pca" in request
  return $.getJSON(`https://api.magicthegathering.io/v1/cards?layout=${layout}&set=pca`);
	// console.log(planes);
	// return new Promise(resolve => resolve(planes));
}

function searchRequest(searchType, searchText) {
	// return $.getJSON(`https://api.magicthegathering.io/v1/cards?${searchType}=${searchText}`);
  return new Promise(resolve => resolve(jace));
}

module.exports.layout = requestLayout;
module.exports.searchRequest = searchRequest;
