const $ = require('jquery');
const _ = require('lodash');


const planechase = require('../html/planechase.html');
const search = require('../html/search.html');
const home = require('../html/home.html');

function removeClasses() {
  $('#planechase').removeClass('active');
  $('#search').removeClass('active');
}

function loadPage(target, callback){
  // removeClasses();
  $('#container').html(target);
  $('title').html('magicJS | ' + target);
  if (callback) {
    callback();
  }
}

module.exports.loadPage = loadPage;

module.exports.home = home;
module.exports.planechase = planechase;
module.exports.search = search;
