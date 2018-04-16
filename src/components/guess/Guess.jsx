import React, { Component } from 'react';

// STYLES
import './index.css';

class Guess extends Component {
  constructor(props) {
    super(props);
    this.answer = this.pickNumber(10);

    this.state = {
      max: 10,
      lives: Math.round(Math.log2(7)),
      status: 'new',
      message: '',
      active: true,
    }

    this.onNumberChange = this.onNumberChange.bind(this);
    this.onRangeChange = this.onRangeChange.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  pickNumber(x) {
    let d = new Date();
    let newNum = (d.getMilliseconds() % x - 1) + 1
    return newNum ? newNum: newNum + 1;
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.status === 'won' || this.state.lives === 0) {
      return;
    }

    let
      max = this.state.max,
      lives = this.state.lives,
      active = this.state.active,
      status, message;

    if (lives === 1 && !(this.guess === this.answer)) {
      status = 'wrong';
      active = false;
      lives = 0;
      message = 'Game over';
    } else if (this.guess === this.answer) {
      status = 'won';
      message = 'You won!';
      active = false;
    } else if (this.guess > this.answer) {
      status = 'wrong';
      message = 'You guessed too high!';
      lives = this.state.lives - 1;
    } else if (this.guess < this.answer) {
      status = 'wrong';
      message = 'You guessed too low!';
      lives = this.state.lives - 1;
    } else {
      status = 'wrong';
      message = '';
    }

    this.setState({
      max,
      lives,
      status,
      message,
      active,
    })

    e.target.guess.value = '';
  }

  onNumberChange(e) {
    e.preventDefault();

    let userGuess = e.target.value;

    this.guess = parseInt(userGuess, 10);
  }

  onRangeChange(e) {
    e.target.min = 5;
    e.target.max = 1000;
    let range = e.target.value;
    console.log(range);

    this.setState({
      max: range,
      lives: Math.round(Math.log2(e.target.value))
    });

    this.answer = this.pickNumber(range);
  }

  resetGame() {
    let reset = {
      max: 10,
      lives: Math.round(Math.log2(7)),
      status: 'new',
      message: '',
      active: true
    };

    this.answer = this.pickNumber(this.state.max);
    this.setState(reset);
  }

  render() {
    return (
      <div className="guess">
        <h1>Guess the Number!</h1>
        <div className="top">
          <div>Lives left: {this.state.lives}</div>
          <button className={`reset-btn ${this.state.active ? "hide": "active"}`} onClick={this.resetGame}>Reset Game</button>
        </div>

        <form className="guess" onSubmit={this.onSubmit}>
          <div>Number Range:</div>
          <input type="range" value={this.state.max} name="range" onChange={this.onRangeChange} />

          <div className="center">
            <div className="guess-it">Guess the number between 1 and {this.state.max}</div>
            <div>
              <label>
                <input type="number" name="guess" onChange={this.onNumberChange} />
              </label>
              <button className={`enter-btn ${this.state.active ? "active": "hide"}`}>Enter</button>
            </div>
          </div>

        </form>
        <div className="msg">
          <div className={this.state.status}>{this.state.message}</div>
          <div>{!this.state.active ? `The magic number was ${this.answer}` : ""}</div>
        </div>
      </div>
    )
  }
}

export default Guess;
