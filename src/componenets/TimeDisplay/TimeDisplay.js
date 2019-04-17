import React from 'react'

import './TimeDisplay.css'


const TimeDisplay = ({ hours, minutes, seconds }) => {

  const h = hours < 10 ? '0' + hours.toString() : hours.toString();
  const m = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
  const s = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

  const tm = h + ' : ' + m + ' : ' + s;

  return (
    <div className = 'time-display'>
       { tm }     
    </div>
  )  
}

export default TimeDisplay;
