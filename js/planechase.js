const $ = require('jquery');
const requests = require('./requests.js');
const manaSymbols = require('./manaSymbols.js');


const request = requests.layout('plane');
let list = [];

function length(obj) {
  return Object.keys(obj).length;
}

function random(cardList) {
  return Math.floor(Math.random() * length(cardList));
}

function renderCard(card) {
  $('#imageHolder').attr('src', card.imageUrl);
  $('#name').html(card.name);
  const text = card.text.split('Whenever you roll ');
  $('#oracle').html(manaSymbols.parse(text[0]));
  $('#chaos').html(manaSymbols.parse(text[1]));
}

function next() {
  const current = random(list);
  const card = list[current];
  list.splice(current, 1);
  renderCard(card);
}

function loadCurrent() {
  if (list.length > 0) {
    next();
  } else {
    $('#imageHolder').attr('src', 'Planes/default.jpg');
    request.then((response) => {
      list = response.cards.slice();
    });
  }
}

module.exports.loadCurrent = loadCurrent;
