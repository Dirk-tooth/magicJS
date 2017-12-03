import React from 'react';

const isNumber = num => !isNaN(num);

function splitOnSymbols(mainText) {
  const splitString = mainText.split(' ');
  const addBrackets = splitString.map((item) => {
    if (item === 'CHAOS' || item === 'CHAOS,') {
      return '{CHAOS}';
    }
    return item;
  });
  return addBrackets.join(' ').split('{').reduce((arr, subText) => [...arr, ...subText.split('}')], []);
}

function replacements(text, idx) {
  if (isNumber(text) && text !== '') {
    return <span className="anyColorSym" key={idx}>{text}</span>;
  }
  switch (text) {
    case 'CHAOS':
      return <span className="manaSymbol chaosSym" key={idx}><img src="./images/chaos.svg" alt="chaos symbol" /></span>;
    case 'T':
      return <span className="manaSymbol tapSym" key={idx}><img src="./images/tap.svg" alt="tap symbol" /></span>;
    case 'Q':
      return <span className="manaSymbol unTapSym" key={idx}><img src="./images/unTap.svg" alt="untap symbol" /></span>;
    case 'C':
      return <span className="manaSymbol colorlessSym" key={idx}><img src="./images/colorless.svg" alt="colorless mana symbol" /></span>;
    case 'W':
      return <span className="manaSymbol whiteSym" key={idx}><img src="./images/white.svg" alt="white mana symbol" /></span>;
    case 'U':
      return <span className="manaSymbol blueSym" key={idx}><img src="./images/blue.svg" alt="blue mana symbol" /></span>;
    case 'B':
      return <span className="manaSymbol blackSym" key={idx}><img src="./images/black.svg" alt="black mana symbol" /></span>;
    case 'R':
      return <span className="manaSymbol redSym" key={idx}><img src="./images/red.svg" alt="red mana symbol" /></span>;
    case 'G':
      return <span className="manaSymbol greenSym" key={idx}><img src="./images/green.svg" alt="green mana symbol" /></span>;
    default:
      return text;
  }
}

function parse(text) {
  return splitOnSymbols(text).map((item, idx) => replacements(item, idx));
}

module.exports.parse = parse;
