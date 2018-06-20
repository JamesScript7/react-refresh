import React from 'react';

const TweetForm = ({ startValue, maxLen, addNewStatus, handleChange }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const val = e.target.tweet.value;

    if (val.length !== 0) {
      addNewStatus(val);
      e.target.reset();
    }
  };

  return (
    <form className="tweet-form" onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        name="tweet"
        autoComplete="off"
        maxLength={maxLen}
        onChange={e => handleChange(e)}
        placeholder={startValue} />

      <button>Tweet!</button>
    </form>
  );
}

export default TweetForm;
