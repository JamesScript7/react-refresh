import React, { Component } from 'react';

class Guess extends Component {
  constructor(props) {
    super(props);
    this.answer = this.pickNumber(10);

    this.state = {
      max: 10,
      status: 'new',
      message: 'Guess the number between 1 and',
    }

    this.onNumberChange = this.onNumberChange.bind(this);
    this.onRangeChange = this.onRangeChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  pickNumber(x) {
    var d = new Date();
    return (d.getMilliseconds() % x - 1) + 1;
  }

  onSubmit(e) {
    e.preventDefault();
    let status, max;

    if (this.guess === this.answer) {
      console.log('you guessed it');
    }

    // e.target.reset();
    e.target.guess.value = '';
  }

  onNumberChange(e) {
    e.preventDefault();

    let userGuess = e.target.value;
    console.log(this.answer);

    this.guess = parseInt(userGuess, 10);
  }

  onRangeChange(e) {
    let range = e.target.value;

    this.setState({
      max: range
    });

    this.answer = this.pickNumber(this.state.max);
  }

  render() {
    return (
      <form className="guess" onSubmit={this.onSubmit}>
        <input type="range" min="5" max="50" name="range" onChange={this.onRangeChange} />
        <label>
          Guess the Number:
          <input type="number" name="guess" onChange={this.onNumberChange} />
        </label>
        <button>Enter</button>
        <div className={`message ${this.state.status}`}>{this.state.message} {this.state.max}</div>
      </form>
    )
  }
}

export default Guess;
