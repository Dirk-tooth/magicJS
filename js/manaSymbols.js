const isNumber = num => !isNaN(num);

function parse (text) {

  if (text) {
    let num = [];
    let len = text.length;

    for (var i = 0; i < len; i++) {
      if(text.charAt(i) === '{') {
        if (isNumber(text.charAt(i + 1))) {
          num.push(text.charAt(i +1));
        }
      }
    }

    let newTextanyColor = text;

    num.forEach(item => {
      let str = '{' + item + '}';
      newTextanyColor = newTextanyColor.replace(str, '<span class="manaSymbol anyColor"> ' + item + ' </span>');
    });

    let newTextchaos = newTextanyColor.replace(/CHAOS/g, '<span class="manaSymbol chaosSym"><img src="./images/chaos.svg" alt=""></span>');
    let newTexttap = newTextchaos.replace(/{T}/g, '<span class="manaSymbol tapSym"><img src="./images/tap.svg" alt=""></span>');
    let newTextunTap = newTexttap.replace(/{Q}/g, '<span class="manaSymbol unTapSym"><img src="./images/unTap.svg" alt=""></span>');
    let newTextc = newTextunTap.replace(/{C}/g, '<span class="manaSymbol colorlessSym"><img src="./images/colorless.svg" alt=""></span>');
    let newTextw = newTextc.replace(/{W}/g, '<span class="manaSymbol whiteSym"><img src="./images/white.svg" alt=""></span>');
    let newTextu = newTextw.replace(/{U}/g, '<span class="manaSymbol blueSym"><img src="./images/blue.svg" alt=""></span>');
    let newTextb = newTextu.replace(/{B}/g, '<span class="manaSymbol blackSym"><img src="./images/black.svg" alt=""></span>');
    let newTextr = newTextb.replace(/{R}/g, '<span class="manaSymbol redSym"><img src="./images/red.svg" alt=""></span>');
    let newTextg = newTextr.replace(/{G}/g, '<span class="manaSymbol greenSym"><img src="./images/green.svg" alt=""></span>');

    return newTextg;
} else {return text;}
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const replacements = {
//   '{C}': 'colorless',
//   '{W}': 'white',
//   '{U}': 'blue',
//   '{B}': 'black'
//   // etc.
// };
//
// function typeToSpan(type){
//   return '<span class="manaSymbol ' + type + 'Sym"><img src="./images/' + type + '.svg" alt=""></span>';
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
