import React, { Component } from 'react';

import './index.css';

class Guess extends Component {
  constructor(props) {
    super(props);
    this.answer = this.pickNumber(10);

    this.state = {
      max: 10,
      lives: 7,
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

    if (lives <= 1) {
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
    let range = e.target.value;
    e.target.min = 5;
    e.target.max = 50;

    this.setState({
      max: range
    });

    this.answer = this.pickNumber(this.state.max);
  }

  resetGame() {
    let reset = {
      max: 10,
      lives: 5,
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
        <div>Lives left: {this.state.lives}</div>
        <button className={`reset-btn ${this.state.active ? "hide": "active"}`} onClick={this.resetGame}>Reset Game</button>

        <form className="guess" onSubmit={this.onSubmit}>
          <input type="range" value={this.state.max} name="range" onChange={this.onRangeChange} />
          <label>
            Guess the Number:
            <input type="number" name="guess" onChange={this.onNumberChange} />
          </label>
          <button className={`enter-btn ${this.state.active ? "active": "hide"}`}>Enter</button>
        </form>

        <div>Guess the number between 1 and {this.state.max}</div>
        <div className={`message ${this.state.status}`}>{this.state.message}</div>
        <div>{!this.state.active ? `The magic number was ${this.answer}` : ""}</div>
      </div>
    )
  }
}

export default Guess;
