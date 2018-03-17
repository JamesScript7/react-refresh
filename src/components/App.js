import React, { Component } from 'react';
import './App.css';

import Game from './tictactoe/Game';
import Tweet from './tweety/Tweet';
import Guess from './guess/Guess';

class App extends Component {
  render() {
    return (
      <div>
        <Game />
        <Tweet />
        <Guess />
      </div>
    );
  }
}

export default App;
