import React, { Component } from 'react';

class TweetForm extends Component {
  onSubmit(e) {
    e.preventDefault();

    if (e.target.tweet.value.length !== 0) {
      this.props.addNewStatus(e.target.tweet.value);
      e.target.reset();
    }
  }

  render() {
    return (
      <form className="tweet-form" onSubmit={(e) => this.onSubmit(e)}>
        <input
          type="text"
          name="tweet"
          autoComplete="off"
          maxLength={this.props.maxLen}
          onChange={e => this.props.handleChange(e)}
          placeholder={this.props.startValue} />

        <button>Tweet!</button>
      </form>
    );
  }
}

export default TweetForm;
