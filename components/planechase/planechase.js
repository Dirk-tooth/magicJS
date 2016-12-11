const e = require('../../elemental');
const manaSymbols = require('./manaSymbols.js');

function Planechase({card = {}, nextCard}){
    let text = card.text ? card.text.split('Whenever you roll ') : [];
    return (
      e.div('row', [
        e.div('col-md-6 theimage', [
          e.img({'class': 'theimageHolder', src: card.imageUrl || 'Planes/default.jpg', onclick: nextCard})
        ]),
        e.div('col-md-6 thetext', [
          e.h2(null, card.name || ''),
          e.h4(null, manaSymbols.parse(text[0])),
          e.h4(null, manaSymbols.parse(text[1]))
        ]),
      ])
  )
}

module.exports.Planechase = Planechase;
