import React, { Component } from 'react'
import FifteenRow from '../FifteenRow';
import Board from '../../entity/Board';

import './Fifteen.css';

export default class Fifteen extends Component {
  pieces = [];
  
  constructor (props) {
    super()

    const b = new Board()
    this.state = {
      board: b
    }
  }

  cellClick = (num) => {
    
    this.setState(() => {
      const b = this.state.board;
      console.log('swap: ' + num);
      b.swap(num);
      return b;
    })

    console.log('Cell clicked: ' + num);
  }

  render() {
    
    const arr = this.state.board.getElementsAsNumbers();

    return (
      <div className = 'fifteen'>
        
        <FifteenRow cells = { arr.slice(0, 4) }  
                    indexes = {[0, 1, 2, 3]}  
                    cellClick = { (num) => {this.cellClick(num) } } />
        <FifteenRow cells = { arr.slice(4, 8) }   
                    indexes = {[4, 5, 6, 7]}  
                    cellClick = { (num) => {this.cellClick(num) } } />
        <FifteenRow cells = { arr.slice(8, 12) }  
                    indexes = {[8, 9, 10, 11]}  
                    cellClick = { (num) => {this.cellClick(num) } } />
        <FifteenRow cells = { arr.slice(12, 16) } 
                    indexes = {[12, 13, 14, 15]}  
                    cellClick = { (num) => {this.cellClick(num) } } />

      </div>
    )
  }
}
