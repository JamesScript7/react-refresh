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
      status: 'START',
      min: 0,
      sec: 0
    }

    this.arr = Array(60).fill(null);
    this.timer = null;
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  handleChange(e) {
    if (this.state.status !== 'START') return;
    const { id, value } = e.target;

    if (id === 'minutes') {
      this.setState({
        minutes: parseInt(value, 10),
        min: parseInt(value, 10)
      });
    }

    if (id === 'seconds') {
      this.setState({
        seconds: parseInt(value, 10),
        sec: parseInt(value, 10)
      });
    }
  }
  handleStart() {
    const { countDown, status, min, sec } = this.state;
    if (sec < 1 && min < 1) return;
    const combined = (min * 60) + sec;

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
  handleReset() {
    if (this.state.status === 'START') return;
    console.log('*RESET*');

    clearInterval(this.timer);
    this.setState({
      minutes: 0,
      seconds: 0,
      countDown: null,
      status: 'START',
      min: 0,
      sec: 0
    });
  }
  run(num) {
    let { min, sec } = this.state;

    this.timer = setInterval(() => {
      if (num > 0) {

        if (min < 1) {
          sec--;
        } else {
          if (sec === 0) {
            min--;
            sec = 60;
          }
          sec--;
        }

        num--;
        this.setState({
          countDown: num,
          min: min,
          sec: sec
        });
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
    const { minutes, seconds, countDown, status, min, sec } = this.state;
    let secondsWithZero;

    if (sec < 10) {
      secondsWithZero = '0' + sec.toString();
    }

    return (
      <div className="clock">
        <h1>Quick Timer</h1>
        <div className="input-field">
          <label htmlFor="minutes">Minutes:</label>
          <Minutes
            arr={this.arr}
            minutes={minutes}
            handleChange={(e) => this.handleChange(e)} />
          <label htmlFor="seconds">Seconds:</label>
          <Seconds
            arr={this.arr}
            seconds={seconds}
            handleChange={(e) => this.handleChange(e)} />
          <Buttons
            countDown={countDown}
            status={status}
            handleStart={() => this.handleStart()}
            handleReset={() => this.handleReset()} />
        </div>
        <div>
          {(status !== 'START') &&
            <div>
              <span className="countdown-number">{min}</span>
              <span className="countdown-number">:</span>
              <span className="countdown-number">{secondsWithZero || sec}</span>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Timer;
