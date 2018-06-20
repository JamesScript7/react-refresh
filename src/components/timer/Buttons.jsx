import React from 'react';

const Buttons = ({ countDown, status, onStart, onReset }) => {
  return (
    <span className="button">
      <button
        className={countDown ? "stop-btn" : "start-btn"}
        onClick={() => onStart()}>
        {status}
      </button>
      <button
        className="reset-btn"
        onClick={() => onReset()}>
        RESET
      </button>
    </span>
  );
}

export default Buttons;
