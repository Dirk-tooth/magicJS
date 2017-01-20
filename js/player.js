const React = require('react');

const Player = React.createClass({
  getInitialState() {
    return {
      name: 'Player Name',
      idx: '',
      life: 20,
    };
  },
  handleChange(event) {
    this.setState({ text: event.target.value });
  },
  minusOneLife() {
    this.setState({ life: this.state.life -= 1 });
  },
  plusOneLife() {
    this.setState({ life: this.state.life += 1 });
  },
  addCounters() {
    return (
      <div />
    );
  },
  render() {
    return (
      <div className="player">
        <textarea
          className="form-control"
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
        />
        <div className="lifeTotal">
          {this.state.life}
        </div>
        <div>
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

const Players = React.createClass({
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
          onClick={this.addPlayer}
        >
          Add Players
        </button>
        <div className="player-container">
          { this.state.numberOfPlayers.map((item, idx) => <Player key={idx} placeholder="Player Name" />) }
        </div>
      </div>
    );
  },
});

module.exports = Players;
