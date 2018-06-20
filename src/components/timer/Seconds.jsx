import React from 'react';

const Seconds = ({ arr, seconds, handleChange}) => {
  return (
    <select
      id="seconds"
      value={seconds}
      onChange={(e) => handleChange(e)}>
      {
        arr.map((el, i) => {
          return <option key={i} value={i}>{i}</option>
        })
      }
    </select>
  );
}

export default Seconds;
