const requests = require('../utility/requests.js');
const manaSymbols = require('../utility/manaSymbols.js');
const React = require('react');

const request = requests.layout('plane');

function length(obj) {
  return Object.keys(obj).length;
}

function random(cardList) {
  return Math.floor(Math.random() * length(cardList));
}

class Plane extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   planes: '',
    //   currentPlaneImage: 'images/default.jpg',
    //   currentPlaneName: '',
    //   currentPlaneOracle: '',
    //   currentPlaneChaos: '',
    // };
    // request.then((response) => {
    //   this.props.changeTopLevelState('planechase.planes', response.cards);
    // });
  }
  nextPlane() {
    if (length(this.props.planechase.planes) > 0) {
      const current = random(this.props.planechase.planes);
      const card = this.props.planechase.planes[current];
      const text = card.text.split('Whenever you roll ');
      this.props.planechase.planes.splice(current, 1);
      const newState = {
        currentPlaneImage: card.imageUrl,
        currentPlaneName: card.name,
        currentPlaneOracle: manaSymbols.parse(text[0]),
        currentPlaneChaos: manaSymbols.parse(text[1]),
      };
      this.props.changeTopLevelState('planechase', newState);
    } else {
      this.props.changeTopLevelState('planechase', {
        planes: request,
        currentPlaneImage: 'images/default.jpg',
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
          <input type="image"
            id="plane-image"
            alt={`${this.props.planechase.currentPlaneName} card`}
            src={this.props.planechase.currentPlaneImage}
            onClick={() => this.nextPlane()}
          />
        </div>
        <div className="plane-text">
          <h2 id="plane-name">{this.props.planechase.currentPlaneName}</h2>
          <h4 id="plane-oracle">{this.props.planechase.currentPlaneOracle}</h4>
          <h4 is="plane-chaos">{this.props.planechase.currentPlaneChaos}</h4>
        </div>
      </div>
    );
  }
}

module.exports = Plane;
