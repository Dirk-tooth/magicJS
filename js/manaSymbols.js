function parse (text) {
  if (text) {
    let newTextchaos = text.replace(/CHAOS/g, '<span class="manaSymbol chaosSym"><img src="./images/chaos.svg" alt=""></span>');
    let newTexttap = newTextchaos.replace(/{T}/g, '<span class="manaSymbol tapSym"><img src="./images/tap.svg" alt=""></span>');
    // newText = text.replace('{unT}', '<span class="manaSymbol unTSym"><img src="unT.svg" alt=""></span>');
    let newTextc = newTexttap.replace(/{C}/g, '<span class="manaSymbol colorlessSym"><img src="./images/colorless.svg" alt=""></span>');
    let newTextw = newTextc.replace(/{W}/g, '<span class="manaSymbol whiteSym"><img src="./images/white.svg" alt=""></span>');
    let newTextu = newTextw.replace(/{U}/g, '<span class="manaSymbol blueSym"><img src="./images/blue.svg" alt=""></span>');
    let newTextb = newTextu.replace(/{B}/g, '<span class="manaSymbol blackSym"><img src="./images/black.svg" alt=""></span>');
    let newTextr = newTextb.replace(/{R}/g, '<span class="manaSymbol redSym"><img src="./images/red.svg" alt=""></span>');
    let newTextg = newTextr.replace(/{G}/g, '<span class="manaSymbol greenSym"><img src="./images/green.svg" alt=""></span>');
    // newText = text.replace('{' + hadNum(text) + '}', '<span class="manaSymbol anySym"><img src="any.svg" alt="">' + num + '</span>');

    return newTextg;
} else {return text;}
}

module.exports.parse = parse;
