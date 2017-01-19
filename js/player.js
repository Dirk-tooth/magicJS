const React = require('react');

const player = React.createClass({
  getInitialState() {
    return {
      name: 'Player Name',
      idx: '',
      life: 20,
    };
  },
  minusOneLife() {
    this.setState({ life: this.state.life -= 1 });
  },
  plusOneLife() {
    this.setState({ life: this.state.life += 1 });
  },
  addCOunters() {
    return (
      <div />
    );
  },
  render() {
    return (
      <div className="player">
        <h3>{this.state.name}</h3>
        <div className="lifeTotal">
          {this.state.life}
          <button
            className="minus btn"
            onClick={this.minusOneLife}
          >
            <span className="glyphicon glyphicon-minus" />
          </button>
          <button
            className="plus btn"
            onClick={this.plusOneLife}
          >
            <span className="glyphicon glyphicon-plus" />
          </button>
        </div>
        <button
          className="add-counters btn"
          onClick={this.addCounters}
        >
          <span className="glyphicon glyphicon-tasks" />
        </button>
      </div>
    );
  },
});

const players = React.createClass({
  getInitialState() {
    return {
      numberOfPlayers: ['ugin', 'ugin'],
    };
  },
  addPlayer() {
    this.setState({ numberOfPlayers: ['ugin', ...this.state.numberOfPlayers] });
  },
  render() {
    return (
      <div>
        <button
          className="add-player-button"
          onClick={addPlayer}
        >
          Add Players
        </button>
        { this.state.numberOfPlayers.map((item, idx) => <player key={idx} />) }
      </div>
    );
  },
});

module.exports.players = players;
