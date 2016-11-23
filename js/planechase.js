// planechase stuff
//Global vars
var currentImageNumber = 1;
var deck = [];

//background code
var isInArray = function(array, checkThis) {
  var _isInArray = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === checkThis) {
      _isInArray = true;
      }
    }
  return _isInArray;
};

var randomNumber = function(maxNum) {
  return Math.floor(Math.random() * maxNum);
};

//image functions
var getImage = function(imageNum) {
  return "Planes/Image-" + imageNum + ".jpg";
};

var loadImage = function(imageNum) {
  var image = document.getElementById('imageHolder');
  image.setAttribute("src", getImage(imageNum));
};

var loadDefaultImage = function() {
  var image = document.getElementById('imageHolder');
  image.setAttribute("src", "Planes/default.jpg");
};

var randomImage = function() {
  // if (deck.length === 0) {
  //   loadDefaultImage();
  // }
  // else {
    selectedIndex = randomNumber(deck.length);
    loadImage(deck[selectedIndex]);
    deck.splice(selectedIndex, 1);
    //console.log(deck.length);
  // }
};

var getCardFromDeck = function() {
  selectedIndex = randomNumber(deck.length);
  return deck[selectedIndex];
};

var nextImage = function() {
  currentImageNumber += 1;
  loadImage(currentImageNumber);
};

//deck functions
var fillDeck = function() {
  for (var i = 1; i <= 74; i++) {
    deck.push(i);
  }
};

var addCard = function() {
  var addedCard = prompt("Enter the number of the card you would like to add", "1, 2, 3, etc...");

  if (isInArray(deck, addedCard)) {
    alert("That card is already in your deck!\nThe cards in your deck are, " + deck);
  }
  else {
    deck.push(addedCard);
  }
};

var shuffleDeck = function() {
  var _deck = [];
  for (var i = 0; i < deck.length; i++) {
    _deck.push(getCardFromDeck());
  }
  deck = _deck;
  console.log(deck);
};

// var chooseDeck = function() {
//   var firstCard = prompt("Enter the number of your first card", "1, 2, 3, etc...");
//   deck.push(firstCard);
//   alert("Your first card is " + firstCard);
//   var secondCard = prompt("Enter the numer of your second card", "1, 2, 3, etc...");
//   deck.push(secondCard);
//   alert("Your second card is " + secondCard);
//   var thirdCard = prompt("Enter the number of your third cars", "1, 2, 3, etc...");
//   deck.push(thirdCard);
//   alert("Your third card is " + thirdCard);
// }

// var deckList = function() {
//   for (var i = 0; i < deck.length; i++) {
//     deck[i]
//   }
// }

//chooseDeck();
//loadImage(currentImageNumber);
// fillDeck();
module.exports.randomImage = randomImage;
module.exports.shuffleDeck = shuffleDeck;
module.exports.fillDeck = fillDeck;
