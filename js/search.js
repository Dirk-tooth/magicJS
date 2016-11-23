var $ = require('jquery');
var _ = require('lodash');
// var card = require('./js/card.js');
var card = require('../html/card.html');

// const mtg = require('mtgsdk');
// mtg.card.all()
// .on('data', function (card) {
//   console.log(card.name);
// });


function buildCardData(item) {
  var data = [];
  item.cards.forEach(function(card){
    data.push({
      name: card.name,
      power: card.power,
      toughness: card.toughness
    });
  });
  return data;
}

function compileCardData(data){
  var compiled = _.template(card);
  var cardInfo = data.map(compiled);
  return cardInfo.join(' ');
}

// $('#search').click(function(inputCall) {
//   var userUrl = 'https://api.magicthegathering.io/v1/cards?name=' + $('#name-input').val();
//   console.log(userUrl);
//   $.getJSON(userUrl, function(item) {
//     console.log(item);
//    $('.test-area').html(compileCardData(buildCardData(item)));
//  });
// });

function search(userInput) {
  console.log(userInput);
  var userUrl = 'https://api.magicthegathering.io/v1/cards?name=' + userInput;
  $.getJSON(userUrl, function(item) {
    console.log(item);
   $('.test-area').html(compileCardData(buildCardData(item)));
 });
}

module.exports.search = search;
