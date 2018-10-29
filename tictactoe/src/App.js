import React, { Component } from 'react';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<h1 className="game-heading">Tic Tac Toe</h1>
        <Game />
      </div>
    );
  }
}

export default App;
