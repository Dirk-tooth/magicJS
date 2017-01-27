// libraries
const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
// js
// const plancechase = require('./js/planechase.js');
const loading = require('./js/loading.js');
// const tools = require('./js/tools.js');
// React Components
const Players = require('./js/player.js');
const Search = require('./js/search.js');
const Plane = require('./js/planechase.js');

let state = {
  searchType: 'name',
};

function home$() {

}

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

// function navSearch$(input) {
//   Search.search(input, 'name');
//   search$();
// }


// $ nav
$(document).ready(() => {
  $('#container').html(loading.home);
  $('title').html('magicJS | Home');
  home$();

  $('#home').click(() => {
    $('#container').html(loading.home);
    $('title').html('magicJS | Home');
    home$();
  });
  $('#toolsPage').click(() => {
    // $('#container').html(loading.tools);
    $('title').html('magicJS | Tools');
    tools$();
  });
  $('#planechase').click(() => {
    // $('#container').html(loading.planechase);
    $('title').html('magicJS | Planechase');
    planechase$();
  });
  $('#searchPage').click(() => {
    // $('#container').html(loading.search);
    $('title').html('magicJS | Search');
    search$();
  });
  $('#nav-search').click(() => {
    const userSearchInput = $('#search-bar-input').val();
    $('#search-bar-input').val('');
    $('#container').html(loading.search);
    $('title').html('magicJS | Search');
    navSearch$(userSearchInput);
  });
});
