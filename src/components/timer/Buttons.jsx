import React from 'react';

const Buttons = ({ countDown, status, handleStart, handleReset }) => {
  return (
    <span className="button">
      <button
        className={countDown ? "stop-btn" : "start-btn"}
        onClick={() => handleStart()}>
        {status}
      </button>
      <button
        className="reset-btn"
        onClick={() => handleReset()}>
        RESET
      </button>
    </span>
  );
}

export default Buttons;
