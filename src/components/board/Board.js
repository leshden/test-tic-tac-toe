import './Board.css';

import {useState} from 'react';
import Square from '../square/Square';
import Status from '../status/Status';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXNext] = useState(true);

  const handleClick = (i) => {
      const squaresCopy = squares.slice();
      if (calculateWinner(squaresCopy) || squaresCopy[i]) {
          return;
      }
      squaresCopy[i] = getXorO();
      setSquares(squaresCopy);
      setXNext(!xIsNext);
      console.log(`onClick cell number : ${i} value : ${squares[i]} `);
  }

  const renderSquare = (i) => {
    return <Square value = {squares[i]} onClickCell={()=>(handleClick(i))} />;
  }

  function getXorO() {
    return xIsNext ? 'X' : 'O';
  }

  return (
      <div>
        <Status winner={calculateWinner(squares)} player={getXorO()} />
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
