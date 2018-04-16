import React, { Component } from 'react';
import TweetForm from './TweetForm';

// STYLES
import './index.css';

// This is a Container Component
class Tweet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.startValue || 'What\'s on your mind?',
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
    let tweetArr = this.state.tweets.slice();
    tweetArr.push(status);

    this.setState({
      tweets: tweetArr,
      inputLen: 0 || 50
    });
  }

  handleChange(e) {
    let difference = this.state.maxLen - parseInt(e.target.value.length, 10);

    if (difference >= 0) {
      this.setState({
        inputLen: difference
      });
    }

  }

  render() {
    return (
      <div className="tweety">
        <h1>Tweet Simulator</h1>
        <div className="tweet-form">
          <TweetForm addNewStatus={this.addNewStatus}
            handleChange={this.handleChange}
            startValue={this.state.value}
            maxLen={this.state.maxLen}/>
          <p>Characters left: {this.state.inputLen}</p>
        </div>
        <ul className="tweet-list">
          {
            this.state.tweets.map((tweet, i) => {
              return (
                <li key={"item-" + (i + 1)}>{tweet}</li>
              )
            }).reverse()
          }
        </ul>
      </div>
    )
  }
}

export default Tweet;
