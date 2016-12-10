// libraries
const $ = require('jquery');
const _ = require('lodash');
const Element = require('./elemental').Element;
// js
const planechase = require('./components/planechase/planechase.js');
const search = require('./js/search.js');
const loading = require('./js/loading.js');
const tools = require('./js/tools.js');
const player = require('./js/player.js');

function home$() {

}

function tools$() {
  $('#add-player-button').click(function() {
    player.addPlayer();
  });

  $('#roll').click(function(){
    tools.triggerRollOff()
  })

}

function planechase$() {
  // plancechase.loadCurrent();
  // $('#imageHolder').click(function() {
  //   plancechase.loadCurrent();
  // });
}

function search$() {
  $('#search').click(function() {
    search.search($('#search-input').val());
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
  $('#toolsPage').click(function() {
    $('#container').html(loading.tools);
    $('title').html('magicJS | Tools');
    tools$();
  });
  $('#planechase').click(function() {
    console.log(planechase.Planechase);
    $('#container').empty().append(planechase.Planechase());
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
