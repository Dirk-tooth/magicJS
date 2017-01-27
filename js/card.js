const manaSymbols = require('./manaSymbols.js');
const React = require('react');

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
    return './images/back.jpeg';
  }
  rulingsTable() {
    const tableHtml = [];
    const card = this.state.card;
    if (card.rulings && card.rulings.length > 0) {
      tableHtml.push('<thead><tr><td>date</td><td>ruling</td></tr></thead><tbody>');
      card.rulings.forEach((item) => {
        tableHtml.push(`<tr><td>${item.date}</td><td>${item.text}</td></tr>`);
      });
    }
    return (`${tableHtml.join(' ')}</tbody>`);
  }
  render() {
    return (
      <div className="card">
        <img src={() => this.checkForImage()} alt={`${this.state.card.name} card`} />
        <div className="card-info">
          <div className="card-info-row">
            <div className="card-name">{this.state.card.name}</div>
            <div className="card-mana-cost">`${manaSymbols.parse(this.state.card.manacost)} (${this.state.card.cmc})`</div>
            <div className="card-type">{this.state.card.type}</div>
            <div className="card-pow-tou">{this.state.card.power ? `${this.state.card.power}/${this.state.card.toughness}` : ''}</div>
            <div className="card-set">{this.state.card.set}</div>
          </div>
          <div className="card-text-row">
            <div className="card-text">{manaSymbols.parse(this.state.card.text)}</div>
          </div>
          <div className="card-rulings-row">
            <div className="card-rulings"><table className="rulings-table">{() => this.rulingsTable()}</table></div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Card;
