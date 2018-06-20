import React, { Component } from 'react';
// Components
import TweetForm from './TweetForm';
import TweetList from './TweetList';
// STYLES
import './index.css';

// This is a Container Component
class Tweet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.startValue || "What's on your mind?",
      tweets: [],
      maxLen: 50,
      inputLen: 0 || 50
    }

    // Need to do this or this.state won't work in the functions here.
    this.addNewStatus = this.addNewStatus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addNewStatus(status) {
    // Just making a copy of state.
    const tweetArr = this.state.tweets.slice();
    tweetArr.push(status);

    this.setState({
      tweets: tweetArr,
      inputLen: 0 || 50
    });
  }
  handleChange(e) {
    const difference = this.state.maxLen - parseInt(e.target.value.length, 10);

    if (difference >= 0) {
      this.setState({
        inputLen: difference
      });
    }

  }
  render() {
    const { value, tweets, maxLen, inputLen } = this.state;

    return (
      <div className="tweety">
        <h1>Tweet Simulator</h1>
        <div className="tweet-form">
          <TweetForm
            addNewStatus={this.addNewStatus}
            handleChange={this.handleChange}
            startValue={value}
            maxLen={maxLen} />
          <p>Characters left: {inputLen}</p>
        </div>
        <TweetList
          tweets={tweets}/>
      </div>
    )
  }
}

export default Tweet;
