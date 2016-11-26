const $ = require('jquery');
const requests = require('./requests.js');

let list = requests.layout('plane');
let current;

function length(obj) {
  let size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty) size++;
  }
  return size;
}

function random() {
  return Math.floor(Math.random() * length(list));
}

function next() {
  if (current >= 0) {
    delete list.current;
    current = random();
    while (list.hasOwnProperty(current) === false) {
      current = random();
    }
  }
  current = random();
}

function loadCurrent() {
  next();
  console.log(current);
  console.log(list);
  console.log(list.current);
}

module.exports.loadCurrent = loadCurrent;
