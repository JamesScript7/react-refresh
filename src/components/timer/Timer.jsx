import React, { Component } from 'react';
// STYLES
import './index.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
      minutes: '00',
      seconds: '00',
      countDown: null,
      status: 'START'
    }

    this.arr = Array(60).fill(null);
    this.timer = null;
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  onChange(e) {
    if (e.target.id === 'minutes') {
      this.setState({
        minutes: e.target.value
      });
    }
    if (e.target.id === 'seconds') {
      this.setState({
        seconds: e.target.value
      });
    }
  }
  onStart(e) {
    console.log('START!');
    let minutes = parseInt(this.state.minutes, 10) * 60 * 1000;
    let seconds = parseInt(this.state.seconds, 10) * 1000;

    if (seconds === 0 && minutes === 0) return;
    if (e.target.className === 'stop-btn') return;

    // Need to be converted to milliseconds
    let d = new Date().getTime();
    let combined = d + minutes + seconds;

    this.timer = setInterval(() => {
      d = new Date().getTime();
      this.run(combined, d);

      if ((combined - d) <= 0) {
        console.log('END!');
        clearInterval(this.timer);
      }
    }, 1000);
  }
  onReset() {
    console.log('RESET!');
    clearInterval(this.timer);

    this.setState({
      minutes: '00',
      seconds: '00',
      countDown: null,
      status: 'START'
    });
  }
  run(comb, date) {
    this.setState({
      countDown: Math.round(((comb - date) / 1000) + 1),
      status: 'STOP'
    });
  }
  render() {
    return (
      <div className="clock">
        <h1>Quick Timer</h1>
        <div className="input-field">
          <label htmlFor="minutes">Minutes:</label>
          <select
            id="minutes"
            value={this.state.minutes}
            onChange={(e) => this.onChange(e)}>
            {this.arr.map((el, i) => {
                return <option key={i} value={i}>{i}</option>
              })
            }
          </select>
          <label htmlFor="seconds">Seconds:</label>
          <select
            id="seconds"
            value={this.state.seconds}
            onChange={(e) => this.onChange(e)}>
            {this.arr.map((el, i) => {
                return <option key={i} value={i}>{i}</option>
              })
            }
          </select>
          <span className="button">
            <button
              className={this.state.countDown ? "stop-btn" : "start-btn"}
              onClick={(e) => this.onStart(e)}>
              {this.state.status}
            </button>
            <button
              className="reset-btn"
              onClick={() => this.onReset()}>
              RESET
            </button>
          </span>
        </div>
        <div>
          {/*<span className="timeset">{this.state.minutes}:{this.state.seconds}</span>*/}
          <div className="countdown-number">{this.state.countDown}</div>
        </div>
      </div>
    )
  }
}

export default Timer;
