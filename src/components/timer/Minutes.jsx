import React from 'react';

const Minutes = ({ arr, minutes, onChange}) => {
  return (
    <select
      id="minutes"
      value={minutes}
      onChange={(e) => onChange(e)}>
      {
        arr.map((el, i) => {
          return <option key={i} value={i}>{i}</option>
        })
      }
    </select>
  );
}

export default Minutes;
