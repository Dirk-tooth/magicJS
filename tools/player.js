const React = require('react');

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Counter',
      idx: '',
      value: 0,
    };
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  minusOneValue() {
    this.setState({ life: this.state.value -= 1 });
  }
  plusOneValue() {
    this.setState({ life: this.state.value += 1 });
  }
  render() {
    return (
      <div className="counter">
        <input
          type="text"
          className="counter-name"
          placeholder={this.props.placeholder}
        />
        <div className="valueTotal">
          {this.state.value}
        </div>
        <div>
          <button
            className="minus btn"
            onClick={() => this.minusOneValue()}
          >
            <span className="glyphicon glyphicon-minus" />
          </button>
          <button
            className="plus btn"
            onClick={() => this.plusOneValue()}
          >
            <span className="glyphicon glyphicon-plus" />
          </button>
        </div>
      </div>
    );
  }
}

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Player Name',
      idx: '',
      life: 20,
      numberOfCounters: [],
    };
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  minusOneLife() {
    this.setState({ life: this.state.life -= 1 });
  }
  plusOneLife() {
    this.setState({ life: this.state.life += 1 });
  }
  addCounters() {
    this.setState({ numberOfCounters: ['jace', ...this.state.numberOfCounters] });
  }
  render() {
    return (
      <div className="player">
        <input
          type="text"
          className="player-name"
          placeholder={this.props.placeholder}
          />
        <div className="lifeTotal">
          {this.state.life}
        </div>
        <div>
          <button
            className="minus btn"
            onClick={() => this.minusOneLife()}
          >
            <span className="glyphicon glyphicon-minus" />
          </button>
          <button
            className="plus btn"
            onClick={() => this.plusOneLife()}
          >
            <span className="glyphicon glyphicon-plus" />
          </button>
        </div>
        <button
          className="add-counters btn"
          onClick={() => this.addCounters()}
        >
          Add Counter
          <span className="glyphicon glyphicon-tasks" />
        </button>
        <div className="counters-container">
          { this.state.numberOfCounters.map((item, idx) => <Counter key={idx} placeholder={`Counter ${idx + 1}`} />) }
        </div>
      </div>
    );
  }
}

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      numberOfPlayers: ['ugin', 'ugin'],
    };
  }
  addPlayer() {
    this.setState({ numberOfPlayers: ['ugin', ...this.state.numberOfPlayers] });
  }
  render() {
    return (
      <div className="tools-container">
        <button
          className="add-player-button btn"
          onClick={() => this.addPlayer()}
        >
          Add Players
        </button>
        <div className="player-container">
          { this.state.numberOfPlayers.map((item, idx) => <Player key={idx} placeholder={`Player ${idx + 1}`} />) }
        </div>
      </div>
    );
  }
}

module.exports = Players;
