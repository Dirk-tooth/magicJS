// libraries
const $ = require('jquery');
// js
const plancechase = require('./js/planechase.js');
const search = require('./js/search.js');
const loading = require('./js/loading.js');
// const tools = require('./js/tools.js');
const player = require('./js/player.js');

let state = {
  searchType: 'name',
};

function home$() {

}

function tools$() {
  $('#add-player-button').click(() => {
    player.addPlayer();
  });
}

function planechase$() {
  plancechase.loadCurrent();
  $('#imageHolder').click(() => {
    plancechase.loadCurrent();
  });
}

function search$() {
  $('.searchby').click(() => {
    state.searchType = $(event.target).html();
    $('#input-dropdown').html(`Search by ${state.searchType} <span class="caret"></span>`);
  });
  $('#search').click(() => {
    search.search($('#search-input').val(), state.searchType);
  });
}

function navSearch$(input) {
  search.search(input, 'name');
  search$();
}


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
    $('#container').html(loading.tools);
    $('title').html('magicJS | Tools');
    tools$();
  });
  $('#planechase').click(() => {
    $('#container').html(loading.planechase);
    $('title').html('magicJS | Planechase');
    planechase$();
  });
  $('#searchPage').click(() => {
    $('#container').html(loading.search);
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
