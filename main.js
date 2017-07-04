const React = require('react');
const ReactDOM = require('react-dom');

// React Components
const Nav = require('./nav/nav.js');
const Players = require('./tools/player.js');
const Search = require('./search/search.js');
const Plane = require('./planechase/planechase.js');
const About = require('./about/about.js');

// Modules
const requests = require('./utility/requests.js');

const request = requests.layout('plane');

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'tools',
      planechase: {
        planes: '',
        currentPlaneImage: 'images/default.jpg',
        currentPlaneName: '',
        currentPlaneOracle: '',
        currentPlaneChaos: '',
      },
      search: {
        searchBy: 'name',
        searchText: '',
        searchCards: [],
        matchAll: [],
        matchAny: [],
        exclude: [],
        cmc: [],
      },
      players: {
        1: {
          id: 1,
          name: 'Player 1',
          life: 20,
          counters: {},
        },
        2: {
          id: 2,
          name: 'Player 2',
          life: 20,
          counters: {},
        },
      },
    };
    request.then((response) => {
      this.state.planechase.planes = response.cards;
    });
  }
  changeTopLevelState(key, value) {
    this.setState({ [key]: value });
  }
  render() {
    const views = {
      plane: <Plane
        changeTopLevelState={(key, value) => this.changeTopLevelState(key, value)}
        planechase={this.state.planechase}
				/>,
      search: <Search
        changeTopLevelState={(key, value) => this.changeTopLevelState(key, value)}
        search={this.state.search}
				/>,
      tools: <div className="game">
        <div className="game-bottom">
          <Plane
            changeTopLevelState={(key, value) => this.changeTopLevelState(key, value)}
            planechase={this.state.planechase}
					/>
        </div>
        <Players
          changeTopLevelState={(key, value) => this.changeTopLevelState(key, value)}
          players={this.state.players}
					/>
      </div>,
      about: <About />,
    };
    return (
      <div>
        <Nav
          changeTopLevelState={(key, value) => this.changeTopLevelState(key, value)}
          views={views}
				/>
        <div>{views[this.state.currentPage]}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Container />,
	document.getElementById('container'),
);
