import React, { Component } from 'react';
// Components
import GuessForm from './GuessForm';
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

    this.resetGame = this.resetGame.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onRangeChange = this.onRangeChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
  }
  pickNumber(x) {
    const d = new Date();
    const newNum = (d.getMilliseconds() % x - 1) + 1;
    return newNum ? newNum : newNum + 1;
  }
  handleSubmit(e) {
    e.preventDefault();
    let { max, lives, status, active } = this.state;

    if (status === 'won' || lives === 0) return;
    let message;

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
      lives = lives - 1;
    } else if (this.guess < this.answer) {
      status = 'wrong';
      message = 'You guessed too low!';
      lives = lives - 1;
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
    });

    e.target.guess.value = '';
  }
  onNumberChange(e) {
    e.preventDefault();
    const userGuess = e.target.value;

    this.guess = parseInt(userGuess, 10);
  }
  onRangeChange(e) {
    e.target.min = 5;
    e.target.max = 1000;
    let range = e.target.value;
    // console.log(range);

    this.setState({
      max: range,
      lives: Math.round(Math.log2(e.target.value))
    });

    this.answer = this.pickNumber(range);
  }
  resetGame() {
    const reset = {
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
    const { max, lives, status, message, active } = this.state;

    return (
      <div className="guess">
        <h1>Guess the Number!</h1>
        <div className="top">
          <div>Lives left: {lives}</div>
          <button className={`reset-btn ${active ? "hide": "active"}`} onClick={this.resetGame}>Reset Game</button>
        </div>
        <GuessForm
          max={max}
          active={active}
          handleSubmit={this.handleSubmit}
          onRangeChange={this.onRangeChange}
          onNumberChange={this.onNumberChange}
          />
        <div className="msg">
          <div className={status}>{message}</div>
          <div>{!active ? `The magic number was ${this.answer}` : ""}</div>
        </div>
      </div>
    )
  }
}

export default Guess;
