import React, { Component } from 'react';

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
      <div><p>{d.getHours()}</p></div>
    )
  }
}

export default Clock;
