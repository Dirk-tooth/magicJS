const loading = require('./loading.js');

let players = [];

function newPlayer(name){
  return { name: name,
           life: 20
         };
}

function addPlayer() {
  $('#player-space').html($('#player-space').html() + loading.player);
  players.push(newPlayer('Player ' + (players.length + 1)));
  console.log(players);
}

module.exports.addPlayer = addPlayer;
module.exports.players = players;
