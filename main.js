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
      currentPage: <Search />,
    };

    this.views = {
      plane: <Plane />,
      search: <Search />,
      tools: <Players />,
    };
  }

  changeViews(view) {
    this.setState({ currentPage: this.views[view] });
  }

  renderPlanechase() {
    this.setState({ currentPage: <Plane /> });
  }
  renderSearch() {
    this.setState({ currentPage: <Search /> });
  }
  renderTools() {
    this.setState({ currentPage: <Players /> });
  }
  render() {
    return (
      <div>
        <Nav renderPlanechase={() => this.changeViews('plane')}
          renderSearch={() => this.changeViews('search')}
          renderTools={() => this.changeViews('tools')}
        />
        <div>{this.state.currentPage}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('container'),
);
