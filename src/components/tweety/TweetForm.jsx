import React, { Component } from 'react';

class TweetForm extends Component {
  onSubmit(e) {
    e.preventDefault();

    this.props.addNewStatus(e.target.tweet.value);
    e.target.reset();
  }

  render() {
    return (
      <form className="tweet-form" onSubmit={(e) => this.onSubmit(e)}>
        <input
          type="text"
          name="tweet"
          autoComplete="off"
          onChange={e => this.props.handleChange(e)}
          placeholder={this.props.startValue} />

        <button>Tweet!</button>
      </form>
    );
  }
}

export default TweetForm;
