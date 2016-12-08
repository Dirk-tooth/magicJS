const loading = require('./loading.js');

let players = [];

const playerTemplate = {
  name: '',
  life: 20,
};

function addPlayer() {
  $('#player-space').html($('#player-space').html() + loading.player);
  players.push(playerTemplate);
  players[players.length-1].name = 'Player' + players.length;
  console.log(players);
}

module.exports.addPlayer = addPlayer;
