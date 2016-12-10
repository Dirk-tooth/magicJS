const E = require('../../elemental').Element;

const $ = require('jquery');
const requests = require('../../js/requests');
const manaSymbols = require('../../js/manaSymbols.js');
let request = requests.layout('plane');
let list = [];

function length(obj) {
  return Object.keys(obj).length;
}

function random(list) {
  return Math.floor(Math.random() * length(list));
}



function next() {
  let current = random(list);
  let card = list[current];
  list.splice(current, 1);
  renderCard(card);
}

function loadCurrent() {
  console.log('hello');
  // if (list.length > 0) {
  //   next();
  // } else {
  //   $('#imageHolder').attr('src', 'Planes/default.jpg');
  //   request.then(function(response) {
  //     list = response.cards.slice();
  //   });
  // }
}

function Planechase(card = {}){
    let text = card.text ? card.text.split('Whenever you roll ') : '';
    return (
      E('div', {'class': 'row'}, {}, [
        E('div', {'class': 'col-md-6'}, {}, [
          E('img', {src: card.imageUrl || 'Planes/default.jpg'}, {'click': loadCurrent})
        ]),
        E('div', {'class': 'col-md-6'}, {}, [
          E('h2', {}, {}, card.name || ''),
          E('h4', {}, {}, manaSymbols.parse(text[0])),
          E('h4', {}, {}, manaSymbols.parse(text[1]))
        ]),
      ])
  )
}

module.exports.loadCurrent = loadCurrent;
module.exports.Planechase = Planechase;
