import React, { Component } from 'react';

class StatusForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addNewStatus(e.target.status.value);
  }

  render() {
    return(
      <form className="StatusForm" onSubmit={this.onSubmit}>
        <h1>Update your Status!</h1>

        <input name="status"
               type="text"
               placeholder={this.props.value} />

        <button>UPDATE</button>
      </form>
    )
  }

}

export default StatusForm;
