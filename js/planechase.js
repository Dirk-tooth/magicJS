const $ = require('jquery');
const requests = require('./requests.js');

let request = requests.layout('plane');
let list = [];

function length(obj) {
  return Object.keys(obj).length;
}

function random(list) {
  return Math.floor(Math.random() * length(list));
}

// function parse (text) {
//   text.fandAndReplace('CHAOS', '<span class="chaosSym"><img src="chaosSym.png></span>"');
//   text.fandAndReplace('{T}', '<span class="tapSym"><img src="tapSym.png></span>"');
//   text.fandAndReplace('{unT}', '<span class="unTSym"><img src="unTSym.png></span>"');
//   text.fandAndReplace('{C}', '<span class="colorlessSym"><img src="colorlessSym.png></span>"');
//   text.fandAndReplace('{W}', '<span class="whiteSym"><img src="whiteSym.png></span>"');
//   text.fandAndReplace('{U}', '<span class="whiteSym"><img src="whiteSym.png></span>"');
//   text.fandAndReplace('{B}', '<span class="blueSym"><img src="blueSym.png></span>"');
//   text.fandAndReplace('{R}', '<span class="redSym"><img src="redSym.png></span>"');
//   text.fandAndReplace('{G}', '<span class="greenSym"><img src="greenSym.png></span>"');
//   text.fandAndReplace('{' + hadNum(text) + '}', '<span class="anySym"><img src="anySym.png>' + num + '</span>"');
// }

function renderCard(card) {
  $('#imageHolder').attr('src', card.imageUrl);
  $('#name').html(card.name);
  // replace lines 23 - 25 with parse call and parsed text
  let text = card.text.split('Whenever you roll ');
  $('#oracle').html(text[0]);
  $('#chaos').html(text[1]);
}

function next() {
  let current = random(list);
  let card = list[current];
  console.log(card);
  list.splice(current, 1);
  renderCard(card);
}

function loadCurrent() {
  if (list.length > 0) {
    next();
  } else {
    $('#imageHolder').attr('src', 'Planes/default.jpg');
    request.then(function(response) {
    list = response.cards.slice();
    });
  }
}

module.exports.loadCurrent = loadCurrent;
