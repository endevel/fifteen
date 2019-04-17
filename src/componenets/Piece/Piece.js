import React from 'react'
import './Piece.css'

export default function Piece({ number, onCellClick }) {
  const cellClassName = 'cell' + 
  (( number === 0) ? ' empty-cell' : '');

  return (
    <div className = 'piece'>
      <span className = { cellClassName }
       onClick = { onCellClick }
      > { number } </span>
    </div>
  )
}
