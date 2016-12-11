const e = require('../../elemental');

const textToSymbol = {
  CHAOS: 'chaos',
  T: 'tap',
  C: 'colorless',
  W: 'white',
  U: 'blue',
  B: 'black',
  R: 'red',
  G: 'green'
}

function parse(text = '') {
  const splitText = text.replace('CHAOS', '{CHAOS}').split(/{|}/);
  return splitText.map(text => textToSymbol[text] ? ManaSymbol(textToSymbol[text]) : e.span({}, text));
}

function ManaSymbol(type){
  return e.span(`manaSymbol ${type}Sym`, [
           e.img({src: `./images/${type}.svg`})
         ]);
}

module.exports.parse = parse;
