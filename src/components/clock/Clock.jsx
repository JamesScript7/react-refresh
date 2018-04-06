import React, { Component } from 'react';

// STYLES
import './index.css';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0
    }

  }
  render() {
    let d = new Date();
    return (
      <div>
        <h1>Clock</h1>
        <p>{d.getHours()}</p>
      </div>
    )
  }
}

export default Clock;
