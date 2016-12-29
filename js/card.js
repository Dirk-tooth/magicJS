const _ = require('lodash');
const card = require('../html/card.html');

function showCard(item) {
  const cardData = {
    imageurl: item.card.imageUrl,
    name: item.card.name,
    manacost: item.card.manaCost,
    type: item.card.type,
    set: item.card.set,
    text: item.card.text,
  };
  const compiled = _.template(card);
  compiled(cardData);
}

module.exports.showCard = showCard;
