import React from 'react'
import './ControlPanel.css'

const ControlPanel = ( props ) => {

    return (
      <div className = 'control-panel'>
        <div className = 'control-btn'>
          <button className = 'btn btn-success'
            onClick = { props.onClickStart }
          >Старт</button>
        </div>

        <div className = 'control-btn'>
          <button className = 'btn btn-success'
            onClick = { props.onClickFinish }
          >Пауза</button>
        </div>

        <div className = 'control-btn'>
          <button className = 'btn btn-success'
            onClick = { props.onClickFinish }
          >Стоп</button>
        </div>
      </div>
    )
}

export default ControlPanel;

