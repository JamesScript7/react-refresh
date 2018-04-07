import React, { Component } from 'react';

// STYLES
import './index.css';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date()
    }
  }
  componentDidMount() {
    this.timer = setInterval(
      () => this.run(), 1000
    );
  }
  componentWillMount() {
    clearInterval(this.timer);
  }
  run() {
    this.setState({
      time: new Date()
    })
  }
  render() {
    let hoursMilitary = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let hours;
    let amPm;

    if (hoursMilitary === 0) {
      hours = 12;
      amPm = 'PM';
    }
    else if (hoursMilitary > 12) {
      hours = hoursMilitary - 12;
      amPm = 'PM';
    } else {
      hours = hoursMilitary;
      amPm = 'AM';
    }
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return (
      <div className="clock">
        <h1>Clock</h1>
        <div>
          <span className="hours">{hours}</span> : <span className="minutes">{minutes}</span> : <span className="seconds">{seconds}</span> {amPm}
        </div>
      </div>
    )
  }
}

export default Clock;
