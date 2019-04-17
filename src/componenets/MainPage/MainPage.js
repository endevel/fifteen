import React, { Component } from 'react'
import Fifteen from '../Fifteen'
import ControlPanel from '../ControlPanel';
import TimeDisplay from '../TimeDisplay';

import './MainPage.css'
import StopWatch from '../../classes/stopwatch';

export default class MainPage extends Component {

  constructor (props) {
    super();

    this.state = {
      timer: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      gameRunning: false
    }

    this.stopWatch = new StopWatch();
    this.stopWatch.onUpdate = this.updateTimer;
  }

  startHundler = () => {
    this.stopWatch.start();
    this.setState({
      gameRunning: true
    })    
  }

  finishHundler = () => {
    this.stopWatch.finish();
    this.setState({
      gameRunning: false
    })
  }

  updateTimer = (days, hours, minutes, seconds) => {
    this.setState({
      timer: {
        days: days, 
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    })
  }

  render() {
    
    return (
      <div className = 'main-page'>
        <ControlPanel 
          onClickStart = { this.startHundler }
          onClickFinish = { this.finishHundler }
        />
        <Fifteen gameRunning = { this.state.gameRunning }/>
        <TimeDisplay 
          hours = { this.state.timer.hours }
          minutes = { this.state.timer.minutes }
          seconds = { this.state.timer.seconds }
        />        
      </div>
    )
  }
}
