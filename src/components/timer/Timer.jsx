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
      countDown: null
    }

    this.arr = Array(60).fill(null);
    this.timer = null;
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  onChange(e) {
    console.log(e.target.id);
    if (e.target.id === 'minutes') {
      this.setState({
        minutes: e.target.value || 0
      });
    }
    if (e.target.id === 'seconds') {
      this.setState({
        seconds: e.target.value || 0
      });
    }
  }
  onStart() {
    console.log('START!');
    let minutes = parseInt(this.state.minutes, 10) * 60 * 1000;
    let seconds = parseInt(this.state.seconds, 10) * 1000;
    if (minutes > 60) {
      console.log("OVER", minutes);
    } else if (seconds > 60) {
      console.log("OVER", seconds);
    }
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
      countDown: null
    });
  }
  run(comb, date) {
    this.setState({
      countDown: Math.round(((comb - date) / 1000) + 1)
    });
  }
  render() {
    // let hoursMilitary = this.state.time.getHours();
    // let minutes = this.state.time.getMinutes();
    // let seconds = this.state.time.getSeconds();
    // let hours;
    //
    // if (hoursMilitary === 0)
    //   hours = 12;
    // else if (hoursMilitary > 12)
    //   hours = hoursMilitary - 12;
    // else
    //   hours = hoursMilitary;
    // if (minutes < 10) minutes = "0" + minutes;
    // if (seconds < 10) seconds = "0" + seconds;

    return (
      <div className="clock">
        <h1>Quick Timer</h1>
        <div className="input-field">
          <select
            id="minutes"
            onChange={(e) => this.onChange(e)}>
            {this.arr.map((el, i) => {
                return <option key={i} value={i}>{i}</option>
              })
            }
          </select>
          <select
            id="seconds"
            onChange={(e) => this.onChange(e)}>
            {this.arr.map((el, i) => {
                return <option key={i} value={i}>{i}</option>
              })
            }
          </select>
          <div className="button">
            <button onClick={() => this.onStart()}>START</button>
            <button onClick={() => this.onReset()}>RESET</button>
          </div>
        </div>
        <div>
          <span className="timeset">{this.state.minutes}:{this.state.seconds}</span>
          <div className="countdown-number">{this.state.countDown}</div>
        </div>
      </div>
    )
  }
}

export default Timer;
