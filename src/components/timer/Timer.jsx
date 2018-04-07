import React, { Component } from 'react';

// STYLES
import './index.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
      minutes: 0,
      seconds: 0,
      countDown: null
    }
  }
  onChange(e) {
    if (e.target.id === 'minutes' && e.target.value <= 60) {
      this.setState({
        minutes: e.target.value
      });
    }
    if (e.target.id === 'seconds' && e.target.value <= 60) {
      this.setState({
        seconds: e.target.value
      });
    }
  }
  onStart() {
    console.log('START!');
    let minutes = parseInt(this.state.minutes, 10) * 60 * 1000;
    let seconds = parseInt(this.state.seconds, 10) * 1000;
    // Need to be converted to milliseconds
    let d = new Date().getTime();
    let combined = d + minutes + seconds;
    let timer = setInterval(function(){
      d = new Date().getTime();
      console.log(((combined - d) / 1000) + 1);
      if ((combined - d) < 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
  onReset() {
    console.log('RESET!');
  }
  render() {
    let hoursMilitary = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let hours;

    if (hoursMilitary === 0)
      hours = 12;
    else if (hoursMilitary > 12)
      hours = hoursMilitary - 12;
    else
      hours = hoursMilitary;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return (
      <div className="clock">
        <h1>Quick Timer</h1>
        <div>
          {this.state.countDown}
        </div>
        <input id="minutes" type="number" value={this.state.minutes ? this.state.minutes : "minutes"} onChange={(e) => this.onChange(e)} placeholder="minutes" max="60"/>
        <input id="seconds" type="number" value={this.state.seconds ? this.state.seconds : "seconds"} onChange={(e) => this.onChange(e)} placeholder="seconds" max="60"/>
        <button onClick={() => this.onStart()}>START</button>
        <button onClick={() => this.onReset()}>RESET</button>
        {/*
        <div>
          <span className="hours">{hours}</span> : <span className="minutes">{minutes}</span> : <span className="seconds">{seconds}</span>
        </div>
        */}
      </div>
    )
  }
}

export default Timer;
