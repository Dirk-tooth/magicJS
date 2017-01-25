const requests = require('./requests.js');
const manaSymbols = require('./manaSymbols.js');
const React = require('react');

const request = requests.layout('plane');

function length(obj) {
  return Object.keys(obj).length;
}

function random(cardList) {
  return Math.floor(Math.random() * length(cardList));
}

class Plane extends React.Component {
  constructor() {
    super();
    this.state = {
      planes: '',
      currentPlaneImage: 'Planes/default.jpg',
      currentPlaneName: '',
      currentPlaneOracle: '',
      currentPlaneChaos: '',
    };
    request.then(response => this.state.planes = response.cards);
  }
  nextPlane() {
    if (length(this.state.planes) > 0) {
      const current = random(this.state.planes);
      const card = this.state.planes[current];
      const text = card.text.split('Whenever you roll ');
      this.state.planes.splice(current, 1);
      this.setState({
        currentPlaneImage: card.imageUrl,
        currentPlaneName: card.name,
        currentPlaneOracle: manaSymbols.parse(text[0]),
        currentPlaneChaos: manaSymbols.parse(text[1]),
      });
    } else {
      this.setState({
        planes: requests.layout('plane'),
        currentPlaneImage: 'Planes/default.jpg',
        currentPlaneName: '',
        currentPlaneOracle: '',
        currentPlaneChaos: '',
      });
    }
  }
  render() {
    return (
      <div className="pc-container">
        <div id="image-holder">
          <input
            type="image"
            id="plane-image"
            alt={`${this.state.currentPlaneName} card`}
            src={this.state.currentPlaneImage}
            onClick={() => this.nextPlane()}
          />
        </div>
        <div className="plane-text">
          <h2 id="plane-name">{this.state.currentPlaneName}</h2>
          <h4 id="plane-oracle">{this.state.currentPlaneOracle}</h4>
          <h4 is="plane-chaos">{this.state.currentPlaneChaos}</h4>
        </div>
      </div>
    );
  }
}

module.exports = Plane;
