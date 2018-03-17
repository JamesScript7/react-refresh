import React, { Component } from 'react';
import './App.css';

import Game from './tictactoe/Game';
import Tweet from './tweety/Tweet';

class App extends Component {
  render() {
    return (
      <div>
        <Game />
        <Tweet />
      </div>
    );
  }
}

export default App;
