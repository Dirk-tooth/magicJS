// libraries
const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');

// modules
const loading = require('./utility/loading.js');

// React Components
const Players = require('./tools/player.js');
const Search = require('./search/search.js');
const Plane = require('./planechase/planechase.js');

const state = {
  searchType: 'name',
};

function tools$() {
  ReactDOM.render(
    <Players />,
    document.getElementById('container'),
  );
}

function planechase$() {
  ReactDOM.render(
    <Plane />,
    document.getElementById('container'),
  );
}

function search$() {
  ReactDOM.render(
    <Search />,
    document.getElementById('container'),
  );
}


// $ nav
$(document).ready(() => {
  $('#container').html(loading.home);

  $('#home').click(() => {
    $('#container').html(loading.home);
  });
  $('#toolsPage').click(() => {
    tools$();
  });
  $('#planechase').click(() => {
    planechase$();
  });
  $('#searchPage').click(() => {
    search$();
  });
});
