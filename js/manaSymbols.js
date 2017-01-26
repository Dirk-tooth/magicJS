const React = require('react');

// const isNumber = num => !isNaN(num);

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

function replacements(text) {
  switch (text) {
    case 'CHAOS':
      return <span className="manaSymbol chaosSym"><img src="./images/chaos.svg" alt="chaos symbol" /></span>;
    case 'T':
      return <span className="manaSymbol tapSym"><img src="./images/tap.svg" alt="tap symbol" /></span>;
    case 'Q':
      return <span className="manaSymbol unTapSym"><img src="./images/unTap.svg" alt="untap symbol" /></span>;
    case 'C':
      return <span className="manaSymbol colorlessSym"><img src="./images/colorless.svg" alt="colorless mana symbol" /></span>;
    case 'W':
      return <span className="manaSymbol whiteSym"><img src="./images/white.svg" alt="white mana symbol" /></span>;
    case 'U':
      return <span className="manaSymbol blueSym"><img src="./images/blue.svg" alt="blue mana symbol" /></span>;
    case 'B':
      return <span className="manaSymbol blackSym"><img src="./images/black.svg" alt="black mana symbol" /></span>;
    case 'R':
      return <span className="manaSymbol redSym"><img src="./images/red.svg" alt="red mana symbol" /></span>;
    case 'G':
      return <span className="manaSymbol greenSym"><img src="./images/green.svg" alt="green mana symbol" /></span>;
    default:
      return text;
  }
}

function parse(text) {
  return splitOnSymbols(text).map(item => replacements(item));
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function parse(text) {
//   if (text) {
//     const num = [];
//     const len = text.length;
//
//     for (let i = 0; i < len; i += 1) {
//       if (text.charAt(i) === '{') {
//         if (isNumber(text.charAt(i + 1))) {
//           num.push(text.charAt(i + 1));
//         }
//       }
//     }
//
//     let newTextanyColor = text;
//
//     num.forEach((item) => {
//       const str = `{${item}}`;
//       newTextanyColor = newTextanyColor.replace(str, <span className="manaSymbol anyColor"> ${item} </span>);
//     });
//
//     const newTextchaos = newTextanyColor.replace(/CHAOS/g, <span className="manaSymbol chaosSym"><img src="./images/chaos.svg" alt="chaos symbol" /></span>);
//     const newTexttap = newTextchaos.replace(/{T}/g, <span className="manaSymbol tapSym"><img src="./images/tap.svg" alt="tap symbol" /></span>);
//     const newTextunTap = newTexttap.replace(/{Q}/g, <span className="manaSymbol unTapSym"><img src="./images/unTap.svg" alt="untap symbol" /></span>);
//     const newTextc = newTextunTap.replace(/{C}/g, <span className="manaSymbol colorlessSym"><img src="./images/colorless.svg" alt="colorless mana symbol" /></span>);
//     const newTextw = newTextc.replace(/{W}/g, <span className="manaSymbol whiteSym"><img src="./images/white.svg" alt="white mana symbol" /></span>);
//     const newTextu = newTextw.replace(/{U}/g, <span className="manaSymbol blueSym"><img src="./images/blue.svg" alt="blue mana symbol" /></span>);
//     const newTextb = newTextu.replace(/{B}/g, <span className="manaSymbol blackSym"><img src="./images/black.svg" alt="black mana symbol" /></span>);
//     const newTextr = newTextb.replace(/{R}/g, <span className="manaSymbol redSym"><img src="./images/red.svg" alt="red mana symbol" /></span>);
//     const newTextg = newTextr.replace(/{G}/g, <span className="manaSymbol greenSym"><img src="./images/green.svg" alt="green mana symbol" /></span>);
//
//     return newTextg;
//   } else { return text; }
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const replacements = {
//
//   'CHAOS' : 'chaos',
//   '{T}'   : 'tap',
//   '{Q}'   : 'unTap',
//   '{C}'   : 'colorless',
//   '{W}'   : 'white',
//   '{U}'   : 'blue',
//   '{B}'   : 'black',
//   '{R}'   : 'red',
//   '{G}'   : 'green',
// };
//
// function typeToSpan(type){
//   return '<span class="manaSymbol ' + type + 'Sym"> /n/
//    <img src="./images/' + type + '.svg" alt=""></span>';
//   // return `<span class="manaSymbol ${type}Sym"`;
// }
//
// function parse(text){
//   const symbols = Object.keys(replacements);
//   return symbols.reduce( function(previousText, symbol){
//     const span = typeToSpan(replacements[symbol]);
//     //change to regEx
//     return previousText.replace(symbol, span);
//   }, text);
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports.parse = parse;
