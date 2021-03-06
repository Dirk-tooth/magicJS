import requests from '../utility/requests.js';
import manaSymbols from '../utility/manaSymbols.js';
import React from 'react';

// const requestObj = requests.layout('planar'); // .reduce((acc, item) => acc.find(item) ? null : acc.push(item), []);
import requestObj from '../data/planes.json';

const request = requestObj.cards;

function length(obj) {
  return Object.keys(obj).length;
}

function random(cardList) {
  return Math.floor(Math.random() * length(cardList));
}

class Plane extends React.Component {
  constructor(props) {
    super(props);
    console.log(request);
  }
  nextPlane() {
    if (this.props.planechase.planes.length > 0) {
      const current = random(this.props.planechase.planes);
      const card = this.props.planechase.planes[current];
      // TODO: Problem Case: Stairs to Infinity
      const text = card.text.split('Whenever you roll ');
      this.props.planechase.planes.splice(current, 1);
      const newState = {
        planes: this.props.planechase.planes,
        currentPlaneImage: card.imageUrl,
        currentPlaneName: card.name,
        currentPlaneOracle: manaSymbols.parse(text[0]),
        currentPlaneChaos: manaSymbols.parse(text[1]),
      };
      this.props.changeTopLevelState('planechase', newState);
    } else {
      this.props.changeTopLevelState('planechase', {
        planes: request,
        currentPlaneImage: 'images/default.png',
        currentPlaneName: 'Welcome to magicJS',
        currentPlaneOracle: 'Click the planar card to the left to planeswalk.',
        currentPlaneChaos: 'There are other worlds than these.',
      });
    }
  }
  render() {
    return (
      <div className='pc-wrap'>
        <div className='game-bottom-background'>
          <img
            alt={`${this.props.planechase.currentPlaneName} background`}
            src={this.props.planechase.currentPlaneImage}
          />
        </div>
        <div className='pc-container'>
          <div id='image-holder'>
            <input
              type='image'
              id='plane-image'
              alt={`${this.props.planechase.currentPlaneName} card`}
              src={this.props.planechase.currentPlaneImage}
              onClick={() => this.nextPlane()}
            />
          </div>
          <div className='plane-text'>
            <h2 id='plane-name'>{this.props.planechase.currentPlaneName}</h2>
            <h4 id='plane-oracle'>
              {this.props.planechase.currentPlaneOracle}
            </h4>
            <h4 is='plane-chaos'>{this.props.planechase.currentPlaneChaos}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Plane;
