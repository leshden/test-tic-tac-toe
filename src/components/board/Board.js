import './Board.css';

import {useState} from 'react';
import Square from '../square/Square';

const Board = (props) => {

  const renderSquare = (i) => {
    return <Square value = {props.squares[i]} onClickCell={()=>(props.handleClick(i))} />;
  }

  return (
      <div role='board'>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    );
}

export default Board;
