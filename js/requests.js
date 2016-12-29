const $ = require('jquery');

function requestLayout(layout) {
  return $.getJSON(`https://api.magicthegathering.io/v1/cards?layout=${layout}`);
}

module.exports.layout = requestLayout;
