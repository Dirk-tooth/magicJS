const $ = require('jquery');

function requestLayout(layout) {
  return $.getJSON(`https://api.magicthegathering.io/v1/cards?layout=${layout}`);
}

function searchRequest(searchType, searchText) {
  const userUrl = `https://api.magicthegathering.io/v1/cards?${searchType}=${searchText}`;
  const searchResult = [];
  $.getJSON(userUrl, item => searchResult.push(item));
  return searchResult;
}

module.exports.layout = requestLayout;
module.exports.searchRequest = searchRequest;
