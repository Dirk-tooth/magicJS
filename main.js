const React = require('react');
const ReactDOM = require('react-dom');

// React Components
const Nav = require('./nav/nav.js');
const Players = require('./tools/player.js');
const Search = require('./search/search.js');
const Plane = require('./planechase/planechase.js');

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: Search,
    };
  }
  renderPlanechase() {
    this.setState({ currentPage: Plane });
    ReactDOM.render(
      <Plane />,
      document.getElementById('container'),
    );
  }
  renderSearch() {
    this.setState({ currentPage: Search });
    ReactDOM.render(
      <Plane />,
      document.getElementById('container'),
    );
  }
  renderTools() {
    this.setState({ currentPage: Players });
    ReactDOM.render(
      <Plane />,
      document.getElementById('container'),
    );
  }
  render() {
    return (
      <div>
        <Nav />
        <div>{this.state.currentPage}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('container'),
);
