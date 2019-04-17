import React, { Component } from 'react'
import Fifteen from '../Fifteen'
import ControlPanel from '../ControlPanel';
import TimeDisplay from '../TimeDisplay';

import './MainPage.css'

export default class MainPage extends Component {
  render() {
    return (
      <div className = 'main-page'>
        <ControlPanel />
        <Fifteen />
        <TimeDisplay />        
      </div>
    )
  }
}
