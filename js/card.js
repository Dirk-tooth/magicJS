var _ = require('lodash');
var card = require('../html/card.html');

function showCard (item) {
  var cardData = {
      name: item.card.name,
      power: item.card.power,
      toughness: item.card.toughness
  };
  var compiled = _.template(card);
  compiled(cardData);
}

module.exports.showCard = showCard;
