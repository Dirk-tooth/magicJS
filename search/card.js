import manaSymbols from '../utility/manaSymbols.js';
import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card,
    };
  }
  checkForImage() {
    if (Object.prototype.hasOwnProperty.call(this.state.card, 'imageUrl')) {
      return this.state.card.imageUrl;
    }
    return '../images/back.jpeg';
  }
  rulingsTable() {
    return (
      <table className="ruleings-table">
        <thead>
          <tr className="ruleings-table-row-header"><td className="date-col">date</td><td className="text-col">ruling</td></tr>
        </thead>
        <tbody className="ruleings-table-body">
          {this.props.card.rulings.map((item, idx) => <tr key={idx} className="ruleings-table-row"><td className="date-col">{item.date}</td><td className="text-col">{manaSymbols.parse(item.text)}</td></tr>)}
        </tbody>
      </table>
    );
  }
  render() {
    return (
      <div className="card">
        <img className="card-image" src={this.checkForImage()} alt={this.state.card.name} />
        <div className="card-info">
          <div className="card-info-row">
            <div className="card-name">{this.state.card.name}</div>
            <div className="card-mana-cost">{this.state.card.manaCost ? <span>{manaSymbols.parse(this.state.card.manaCost)} ({this.state.card.cmc})</span> : ''}</div>
            <div className="card-type">{this.state.card.type}</div>
            <div className="card-pow-tou">{this.state.card.power ? `${this.state.card.power}/${this.state.card.toughness}` : ''}</div>
            <div className="card-set">{this.state.card.set}</div>
          </div>
          <div className="card-text-row">
            <div className="card-text">{this.state.card.text ? manaSymbols.parse(this.state.card.text) : manaSymbols.parse(this.state.card.originalText)}</div>
          </div>
          <div className="card-rulings-row">
            <div className="card-rulings">{this.props.card.rulings && Object.keys(this.props.card.rulings).length > 0 ? this.rulingsTable() : null}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
