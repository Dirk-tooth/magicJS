const $ = require('jquery');

function requestLayout(layout) {
  return $.getJSON(`https://api.magicthegathering.io/v1/cards?layout=${layout}`);
}

function searchRequest(searchType, searchText) {
  return $.getJSON(`https://api.magicthegathering.io/v1/cards?${searchType}=${searchText}`);
}

module.exports.layout = requestLayout;
module.exports.searchRequest = searchRequest;
