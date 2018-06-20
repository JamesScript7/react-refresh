import React, { Component } from 'react';
// STYLES
import './index.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: '0',
      seconds: '0',
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
    console.log('START');
    const minutes = parseInt(this.state.minutes, 10);
    const seconds = parseInt(this.state.seconds, 10);
    const combined = (minutes * 60) + seconds;

    if (seconds === 0 && minutes === 0) return;

    if (this.state.status === 'RESUME') {
      console.log('RESUME');
      this.run(this.state.countDown);

      return;
    } else if (e.target.className === 'stop-btn') {
      console.log('STOP');
      clearInterval(this.timer);

      this.setState({
        minutes: minutes,
        seconds: seconds,
        status: 'RESUME'
      });
      return;
    }

    this.run(combined);
  }
  run(combined) {
    this.timer = setInterval(() => {
      this.setState({
        countDown: combined,
        status: 'STOP'
      });

      if (combined === 0) {
        console.log('END');
        clearInterval(this.timer);
      } else {
        combined--;
      }
    }, 1000);
  }
  onReset() {
    if (this.state.status === 'START') return;
    console.log('*RESET*');

    clearInterval(this.timer);
    this.setState({
      minutes: '0',
      seconds: '0',
      countDown: null,
      status: 'START'
    });
  }
  render() {
    const { minutes, seconds, countDown, status } = this.state;
    console.log(minutes, seconds, countDown, status);

    return (
      <div className="clock">
        <h1>Quick Timer</h1>
        <div className="input-field">
          <label htmlFor="minutes">Minutes:</label>
          <select
            id="minutes"
            value={minutes}
            onChange={(e) => this.onChange(e)}>
            {this.arr.map((el, i) => {
                return <option key={i} value={i}>{i}</option>
              })
            }
          </select>
          <label htmlFor="seconds">Seconds:</label>
          <select
            id="seconds"
            value={seconds}
            onChange={(e) => this.onChange(e)}>
            {this.arr.map((el, i) => {
                return <option key={i} value={i}>{i}</option>
              })
            }
          </select>
          <span className="button">
            <button
              className={countDown ? "stop-btn" : "start-btn"}
              onClick={(e) => this.onStart(e)}>
              {status}
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
          <div className="countdown-number">{countDown}</div>
        </div>
      </div>
    )
  }
}

export default Timer;
