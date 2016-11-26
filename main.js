// libraries
const $ = require('jquery');
const _ = require('lodash');
// js
const plancechase = require('./js/planechase.js');
const search = require('./js/search.js');
const loading = require('./js/loading.js');

const planechase2 = require('./js/planechase2.js');


function home$() {
  // planechase2.loadCurrent();
}

function planechase$() {
  $('#random').click(plancechase.randomImage);
  $('#shuffle').click(plancechase.shuffleDeck);
  $('#fill').click(plancechase.fillDeck);
}

function search$() {
  $('#search').click(function() {
    search.search($('#name-input').val());
  });
}

function navSearch$(input) {
  search.search(input);
  search$();
}


// $ nav
$(document).ready(function() {
  $('#container').html(loading.home);
  $('title').html('magicJS | Home');
  home$();

  $('#home').click(function() {
    $('#container').html(loading.home);
    $('title').html('magicJS | Home');
    home$();
  });
  $('#planechase').click(function() {
    $('#container').html(loading.planechase);
    $('title').html('magicJS | Planechase');
    planechase$();
  });
  $('#searchPage').click(function() {
    $('#container').html(loading.search);
    $('title').html('magicJS | Search');
    search$();
  });
  $('#nav-search').click(function() {
    let userSearchInput = $('#search-bar-input').val();
    $('#search-bar-input').val('');
    $('#container').html(loading.search);
    $('title').html('magicJS | Search');
    navSearch$(userSearchInput);
  });
});
