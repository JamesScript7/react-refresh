import React from 'react';

const GuessForm = ({ max, active, handleSubmit, onRangeChange, onNumberChange}) => {
  return (
    <form className="guess" onSubmit={handleSubmit}>
      <div>Number Range:</div>
      <input type="range" value={max} name="range" onChange={onRangeChange} />
      <div className="center">
        <div className="guess-it">Guess the number between 1 and {max}</div>
        <div>
          <label>
            <input type="number" name="guess" onChange={onNumberChange} />
          </label>
          <button className={`enter-btn ${active ? "active": "hide"}`}>Enter</button>
        </div>
      </div>
    </form>
  );
}

export default GuessForm;
