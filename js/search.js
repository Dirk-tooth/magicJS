const $ = require('jquery');
const _ = require('lodash');
const card = require('../html/card.html');
const manaSymbols = require('./manaSymbols.js');

function searchType(state, feedback) {
  $('input-dropdown').html(feedback);
  state.searchType = feedback;
}

function buildCardData(item) {
  var data = [];
  item.cards.forEach(function(card){
    data.push({
      imageurl: checkForImage(card),
      name: card.name,
      manacost: manaSymbols.parse(card.manaCost),
      cmc: card.cmc,
      type: card.type,
      power: card.power,
      toughness: card.toughness,
      set: card.set,
      text: manaSymbols.parse(card.text),
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
    tableHtml.push('<thead><tr><td>date</td><td>ruling</td></tr></thead><tbody>');
    card.rulings.forEach(function(item) {
      tableHtml.push('<tr><td>' + item.date + '</td><td>' + item.text + '</td></tr>');
    });
  }
  return (tableHtml.join(' ') + '</tbody>');
}

function checkForImage(card) {
  if(card.hasOwnProperty('imageUrl')) {
    return card.imageUrl;
  } else {
    return './images/back.jpeg';
  }
}

function search(userInput, searchType) {
  var userUrl = 'https://api.magicthegathering.io/v1/cards?' + searchType + '=' + userInput;
  $.getJSON(userUrl, function(item) {
   $('.test-area').html(compileCardData(buildCardData(item)));
 });
}

module.exports.search = search;
