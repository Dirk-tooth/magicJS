var currentImageNumber = 1;
var deck = [];


var randomNumber = function(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

var getImage = function(imageNum) {
  return "Planes/Image-" + imageNum + ".jpg";
}

var loadImage = function(imageNum) {
  var image = document.getElementById('imageHolder');
  image.setAttribute("src", getImage(imageNum));
}

var randomImage = function() {
  selectedIndex = randomNumber(deck.length);
  loadImage(deck[selectedIndex]);
  deck.splice(selectedIndex, 1);
  console.log(deck.length);

}

var nextImage = function() {
  currentImageNumber += 1
  loadImage(currentImageNumber);
}

var fillDeck = function() {
  for (var i = 1; i <= 74; i++) {
    deck.push(i);
  }
}

loadImage(currentImageNumber);
fillDeck();
