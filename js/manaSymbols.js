const isNumber = num => !isNaN(num);

function parse(text) {
  if (text) {
    const num = [];
    const len = text.length;

    for (let i = 0; i < len; i += 1) {
      if (text.charAt(i) === '{') {
        if (isNumber(text.charAt(i + 1))) {
          num.push(text.charAt(i + 1));
        }
      }
    }

    let newTextanyColor = text;

    num.forEach((item) => {
      const str = `{${item}}`;
      newTextanyColor = newTextanyColor.replace(str, `<span class="manaSymbol anyColor"> ${item} </span>`);
    });

    const newTextchaos = newTextanyColor.replace(/CHAOS/g, '<span class="manaSymbol chaosSym"><img src="./images/chaos.svg" alt=""></span>');
    const newTexttap = newTextchaos.replace(/{T}/g, '<span class="manaSymbol tapSym"><img src="./images/tap.svg" alt=""></span>');
    const newTextunTap = newTexttap.replace(/{Q}/g, '<span class="manaSymbol unTapSym"><img src="./images/unTap.svg" alt=""></span>');
    const newTextc = newTextunTap.replace(/{C}/g, '<span class="manaSymbol colorlessSym"><img src="./images/colorless.svg" alt=""></span>');
    const newTextw = newTextc.replace(/{W}/g, '<span class="manaSymbol whiteSym"><img src="./images/white.svg" alt=""></span>');
    const newTextu = newTextw.replace(/{U}/g, '<span class="manaSymbol blueSym"><img src="./images/blue.svg" alt=""></span>');
    const newTextb = newTextu.replace(/{B}/g, '<span class="manaSymbol blackSym"><img src="./images/black.svg" alt=""></span>');
    const newTextr = newTextb.replace(/{R}/g, '<span class="manaSymbol redSym"><img src="./images/red.svg" alt=""></span>');
    const newTextg = newTextr.replace(/{G}/g, '<span class="manaSymbol greenSym"><img src="./images/green.svg" alt=""></span>');

    return newTextg;
  } else { return text; }
}

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
