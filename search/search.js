const requests = require('../utility/requests.js');
const Card = require('./card.js');
const React = require('react');

class SearchCards extends React.Component {
  constructor() {
    super();
    this.state = {
      searchBy: 'name',
      searchText: '',
      searchCards: [],
      currentCard: {},
      matchAll: [],
      matchAny: [],
      exclude: [],
      cmc: [],
    };
  }
  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }
  changeSearchType(type) {
    this.setState({ searchBy: type });
  }
  search() {
    requests.searchRequest(this.state.searchBy, this.state.searchText).then((response) => {
      console.log(this.state.searchText);
      this.setState({ searchCards: response.cards });
    })
    .catch(err => console.log('errrororrrr', err));
  }
  render() {
    return (
      <div className="search-container">
        <div className="input-group">
          <div className="input-group-btn">
            <button type="button"
              id="input-dropdown"
              className="btn btn-default dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">{`Search by ${this.state.searchBy} `}<span className="caret" />
            </button>
            <ul className="dropdown-menu">
              <li><button className="searchby" id="byName" onClick={() => this.changeSearchType('name')}>Search by name</button></li>
              <li><button className="searchby" id="byText" onClick={() => this.changeSearchType('text')}>Search by text</button></li>
              <li><button className="searchby" id="byType" onClick={() => this.changeSearchType('type')}>Search by type</button></li>
            </ul>
          </div>
          <input id="search-input" type="text" className="form-control" placeholder="Jace, Memory Adept" onChange={e => this.handleChange(e)} />
          <span className="input-group-btn">
            <button id="search" className="btn btn-default" type="button" onClick={() => this.search()}>Search</button>
          </span>
        </div>
        <div className="results-area">
          {this.state.searchCards.map(card => <Card card={card} key={card.id} />)}
        </div>
      </div>
    );
  }
}

module.exports = SearchCards;
