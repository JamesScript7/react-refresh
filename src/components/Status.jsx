import React, { Component } from 'react';
import StatusForm from './StatusForm';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.startValue || "Make an update...",
      statusUpdates: []
    }
    
    this.addNewStatus = this.addNewStatus.bind(this);
  }

  addNewStatus(newStatus) {
    var statusArr = this.state.statusUpdates;
    statusArr.push(newStatus);

    this.setState({
      statusUpdates: statusArr
    });
  }


  render() {
    return(
      <div className="Status">
        <StatusForm addNewStatus={this.addNewStatus} value={this.state.value} />
        <ul>
          {
            this.state.statusUpdates.map((updates, index) => {
              return <li key={"item" + (index + 1)}>{updates}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Status;
