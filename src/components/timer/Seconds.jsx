import React from 'react';

const Seconds = ({ arr, seconds, onChange}) => {
  return (
    <select
      id="minutes"
      value={seconds}
      onChange={(e) => onChange(e)}>
      {
        arr.map((el, i) => {
          return <option key={i} value={i}>{i}</option>
        })
      }
    </select>
  );
}

export default Seconds;
