import React, { Component } from 'react';
import TweetForm from './TweetForm';

// This is a Container Component
class Tweet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.startValue || 'What\'s on your mind?',
      tweets: [],
    }

    // Need to do this or this.state won't work in addNewStatus()
    this.addNewStatus = this.addNewStatus.bind(this);
  }

  addNewStatus(status) {
    // Just making a copy of state.
    let tweetArr = this.state.tweets.slice();
    tweetArr.push(status);

    this.setState({
      tweets: tweetArr
    });
  }

  render() {
    return (
      <div className="tweety">
        <h1>Tweety Bird</h1>
        <TweetForm addNewStatus={this.addNewStatus} startValue={this.state.value} />
        <ul>
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
