const players = require('./player').players;

function plusButton(target) {

}

function triggerRollOff() {
  const numSides = $('#sides').val();
  const results = players.map(player => ({
    player: player.name,
    roll: Math.ceil(Math.random() * numSides)
  }));
  const html = results.map(result => (
    `<div>${result.player}: ${result.roll}</div>`
  ));

  $('#result').html(html);
}

module.exports.triggerRollOff = triggerRollOff;
