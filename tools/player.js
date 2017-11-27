import React from 'react';

class Counter extends React.Component {
  updateCounterState(newState) {
    this.props.updateCounter(Object.assign({}, this.props.counter, newState));
  }
  handleChange(event) {
    this.updateCounterState({ name: event.target.value });
  }
  minusOneValue() {
    this.updateCounterState({ value: this.props.counter.value - 1 });
  }
  plusOneValue() {
    this.updateCounterState({ value: this.props.counter.value + 1 });
  }
  render() {
    return (
      <div className="counter">
        <input
          type="text"
          className="counter-name"
          placeholder={`Counter ${this.props.counter.id}`}
          onChange={e => this.handleChange(e)}
          value={this.props.counter.name}
        />
        <div className="valueTotal">
          {this.props.counter.value}
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
  updatePlayerState(newState) {
    this.props.updatePlayer(Object.assign({}, this.props.player, newState));
  }

  handleChange(event) {
    this.updatePlayerState({ name: event.target.value });
  }
  minusOneLife() {
    this.updatePlayerState({ life: this.props.player.life - 1 });
  }
  plusOneLife() {
    this.updatePlayerState({ life: this.props.player.life + 1 });
  }

  addCounters() {
    const id = Object.keys(this.props.player.counters).length + 1;
    const newCounter = {
      id,
      name: `Counter ${id}`,
      value: 0,
    };
    this.updateCounter(newCounter);
  }

  updateCounter(newCounter) {
    const counters = Object.assign({}, this.props.player.counters, { [newCounter.id]: newCounter });
    this.updatePlayerState({ counters });
  }

  render() {
    return (
      <div className="player">
        <input
          type="text"
          className="player-name"
          placeholder={`Player ${this.props.player.id}`}
          value={this.props.player.name}
          onChange={e => this.handleChange(e)}
          />
        <div className="lifeTotal">
          {this.props.player.life}
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
          { Object.values(this.props.player.counters).map(item =>
            <Counter key={item.id}
              counter={item}
              updateCounter={newCounter => this.updateCounter(newCounter)} />) }
        </div>
      </div>
    );
  }
}

class Players extends React.Component {
  constructor(props) {
    super(props);
  }
  addPlayer() {
    const id = Object.keys(this.props.players).length + 1;
    const newPlayer = {
      id,
      name: `Player ${id}`,
      life: 20,
      counters: {},
    };
    this.props.changeTopLevelState('players', Object.assign({}, this.props.players, { [newPlayer.id]: newPlayer }));
  }

  updatePlayer(newPlayer) {
    this.props.changeTopLevelState('players', Object.assign({}, this.props.players, { [newPlayer.id]: newPlayer }));
  }

  updatePlayers(value) {
    this.props.changeTopLevelState('players', this.resetPlayers(value));
  }
  resetPlayers(value) {
    const newPlayers = Object.keys(this.props.players).reduce((acc, playerId) => Object.assign({}, acc, { [playerId]: this.changePlayerState(this.props.players[playerId], value) }), {});
    console.log(this.props.players, newPlayers);
    this.props.changeTopLevelState('players', newPlayers);
  }
  changePlayerState(player, value) {
    return Object.assign({}, player, { life: value, counters: {} });
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
        <button
          className="reset to-20 btn"
          onClick={() => this.resetPlayers(20)}
        >
          20
        </button>
        <button
          className="reset to-25 btn"
          onClick={() => this.resetPlayers(25)}
        >
          25
        </button>
        <button
          className="reset to-40 btn"
          onClick={() => this.resetPlayers(40)}
        >
          40
        </button>
        <div className="player-container">
          { Object.values(this.props.players).map(item =>
            <Player key={item.id}
              player={item}
              updatePlayer={newPlayer => this.updatePlayer(newPlayer)} />) }
        </div>
      </div>
    );
  }
}

export default Players;
