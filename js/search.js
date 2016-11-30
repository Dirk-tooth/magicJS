var $ = require('jquery');
var _ = require('lodash');
var card = require('../html/card.html');


function buildCardData(item) {
  var data = [];
  item.cards.forEach(function(card){
    data.push({
      imageurl: checkForImage(card),
      name: card.name,
      manacost: card.manaCost,
      cmc: card.cmc,
      type: card.type,
      power: card.power,
      toughness: card.toughness,
      set: card.set,
      text: card.text,
      rulings: rulingsTable(card)
    });
  });
  return data;
}

function compileCardData(data){
  var compiled = _.template(card);
  var cardInfo = data.map(compiled);
  return cardInfo.join(' ');
}

function rulingsTable(card) {
  let tableHtml = [];
  if(card.rulings && card.rulings.length > 0) {
    tableHtml.push('<tr><th>date</th><th>ruling</th></tr>');
    card.rulings.forEach(function(item) {
      tableHtml.push('<tr><td>' + item.date + '</td><td>' + item.text + '</td></tr>');
    });
  }
  return tableHtml.join(' ');
}

function checkForImage(card) {
  if(card.hasOwnProperty('imageUrl')) {
    return card.imageUrl;
  } else {
    return './images/back.jpeg';
  }
}

function search(userInput) {
  console.log(userInput);
  var userUrl = 'https://api.magicthegathering.io/v1/cards?name=' + userInput;
  $.getJSON(userUrl, function(item) {
    console.log(item);
   $('.test-area').html(compileCardData(buildCardData(item)));
 });
}

module.exports.search = search;
