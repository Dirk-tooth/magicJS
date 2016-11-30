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
      // ruleings: ruleingsTable(card)
    });
  });
  return data;
}

function compileCardData(data){
  var compiled = _.template(card);
  var cardInfo = data.map(compiled);
  return cardInfo.join(' ');
}

function ruleingsTable(card) {
  let tableHtml;
  console.log(card.ruleings);
  if(card.ruleings.length > 0) {
    let table = '<tr><td>date</td><td>ruleing></td></tr>';
    card.ruleings.forEach(function(item) {
      tableHtml += '<tr><td>' + item.date + '</td><td>' + item.text + '</td></tr>';
    });
    tableHtml = table;
  }
  return tableHtml;
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
