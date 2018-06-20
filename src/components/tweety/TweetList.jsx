import React from 'react';

const TweetList = ({ tweets }) => {
  return (
    <ul className="tweet-list">
      {
        tweets.map((tweet, i) => {
          return <li key={"item-" + (i + 1)}>{tweet}</li>
        }).reverse()
      }
    </ul>
  );
}

export default TweetList;
