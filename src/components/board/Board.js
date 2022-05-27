import './Board.css';

import {useState} from 'react';
import Square from '../square/Square';

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const status = 'Next player: X';

  const handleClick = (i) => {
      const squaresCopy = squares.slice();
      squaresCopy[i] = 'X';
      setSquares(squaresCopy);
      console.log(`onClick cell number : ${i} value : ${squares[i]} `);
  }

  const renderSquare = (i) => {
    return <Square value = {squares[i]} onClickCell={()=>(handleClick(i))} />;
  }

  return (
      <div>
        <div className="status">{status}</div>
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
