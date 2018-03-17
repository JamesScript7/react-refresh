import React, { Component } from 'react';

class TweetForm extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addNewStatus(e.target.tweet.value);
    e.target.reset();
  }

  render() {
    return (
      <form className="tweet-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="tweet"
          autoComplete="off"
          placeholder={this.props.startValue} />

        <button>Tweet!</button>
      </form>
    );
  }
}

export default TweetForm;
