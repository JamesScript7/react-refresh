import React, { Component } from 'react';
// Components
import Minutes from './Minutes';
import Seconds from './Seconds';
import Buttons from './Buttons';
// STYLES
import './index.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: 0,
      seconds: 0,
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
    const { id, value } = e.target;

    if (id === 'minutes') this.setState({ minutes: parseInt(value, 10) });
    if (id === 'seconds') this.setState({ seconds: parseInt(value, 10) });
  }
  onStart() {
    const { minutes, seconds, countDown, status } = this.state;
    if (seconds < 1 && minutes < 1) return;
    const combined = (minutes * 60) + seconds;

    switch(status) {
      case 'START':
        console.log('*START*');

        this.setState({
          countDown: combined,
          status: 'STOP'
        });
        this.run(combined);

        break;
      case 'STOP':
        console.log('*STOP*');

        clearInterval(this.timer);
        this.setState({ status: 'RESUME' });

        break;
      case 'RESUME':
        console.log('*RESUME*');

        this.setState({ status: 'STOP'});
        this.run(countDown);

        break;
      default:
        console.log('Error in START/STOP/RESUME');
    }
  }
  onReset() {
    if (this.state.status === 'START') return;
    console.log('*RESET*');

    clearInterval(this.timer);
    this.setState({
      minutes: 0,
      seconds: 0,
      countDown: null,
      status: 'START'
    });
  }
  run(combined) {
    this.timer = setInterval(() => {
      if (combined > 0) {
        combined--;
        this.setState({ countDown: combined });
      } else {
        console.log('*END*');

        clearInterval(this.timer);
        this.setState({
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);
  }
  render() {
    const { minutes, seconds, countDown, status } = this.state;

    return (
      <div className="clock">
        <h1>Quick Timer</h1>
        <div className="input-field">
          <label htmlFor="minutes">Minutes:</label>
          <Minutes
            arr={this.arr}
            minutes={minutes}
            handleChange={(e) => this.onChange(e)} />
          <label htmlFor="seconds">Seconds:</label>
          <Seconds
            arr={this.arr}
            seconds={seconds}
            handleChange={(e) => this.onChange(e)} />
          <Buttons
            countDown={countDown}
            status={status}
            handleStart={() => this.onStart()}
            handleReset={() => this.onReset()} />
        </div>
        <div>
          <div className="countdown-number">{countDown}</div>
        </div>
      </div>
    )
  }
}

export default Timer;
