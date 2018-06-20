import React from 'react';

const Minutes = ({ arr, minutes, handleChange}) => {
  return (
    <select
      id="minutes"
      value={minutes}
      onChange={(e) => handleChange(e)}>
      {
        arr.map((el, i) => {
          return <option key={i} value={i}>{i}</option>
        })
      }
    </select>
  );
}

export default Minutes;
