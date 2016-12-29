const $ = require('jquery');
const loading = require('./loading.js');

const players = [];

const playerTemplate = {
  name: '',
  life: 20,
};

function addPlayer() {
  $('#player-space').html($('#player-space').html() + loading.player);
  players.push(playerTemplate);
  players[players.length - 1].name = `Player' ${players.length}`;
}

module.exports.addPlayer = addPlayer;
