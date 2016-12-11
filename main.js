// libraries
const $ = require('jquery');
// js
const Planechase = require('./components/planechase/planechase.js').Planechase;
const search = require('./js/search.js');
const loading = require('./js/loading.js');
const tools = require('./js/tools.js');
const player = require('./js/player.js');
const store = require('./js/store.js');
const requests = require('./js/requests.js');

requests.layout('plane')
        .then(function(result){
          store.dispatch({ type: 'UPDATE_CARDS', cards: result.cards});
        })

function tools$() {
  $('#add-player-button').click(function() {
    player.addPlayer();
  });

  $('#roll').click(function(){
    tools.triggerRollOff()
  })

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
  $('title').html('magicJS | Home');

  $('#home').click(function() {
    store.dispatch({type: 'CHANGE_PAGE', page: 'home'});
    $('title').html('magicJS | Home');
  });
  $('#toolsPage').click(function() {
    $('#container').html(loading.tools);
    $('title').html('magicJS | Tools');
    tools$();
  });
  $('#planechase').click(function() {
    store.dispatch({type: 'CHANGE_PAGE', page: 'planechase'});
    $('title').html('magicJS | Planechase');
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

function nextCard() {
  store.dispatch({type: 'NEXT_CARD'})
};

const pages = {
  planechase: state => Planechase({card: state.pages.planechase.currentCard, nextCard}),
  home: state => loading.home
}

function renderDocument(state){
  const page = pages[state.currentPage]
  $('#container').empty().append(page(state));
}

store.onChange(renderDocument);
