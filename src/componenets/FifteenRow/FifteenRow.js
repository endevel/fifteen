import React, { Component } from 'react'
import Piece from '../Piece'
import './FifteenRow.css'

export default class FifteenRow extends Component {


  render () {
    const cells = this.props.cells;
    const indexes = this.props.indexes;

    return (
      <div className = 'fifteen-row'>
        <Piece number = { cells[0] } onCellClick = { () => {this.props.cellClick(indexes[0]) } } />
        <Piece number = { cells[1] } onCellClick = { () => {this.props.cellClick(indexes[1]) } } />
        <Piece number = { cells[2] } onCellClick = { () => {this.props.cellClick(indexes[2]) } } />
        <Piece number = { cells[3] } onCellClick = { () => {this.props.cellClick(indexes[3]) } } />
      </div>
    )    
  }
}

