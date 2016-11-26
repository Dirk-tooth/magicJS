const $ = require('jquery');

function request() {

}

function requestLayout(layout) {
  let list;
  $.getJSON('https://api.magicthegathering.io/v1/cards?layout=' + layout, function(item) {
    list = item;
  });
  return list;
}

module.exports.layout = requestLayout;
