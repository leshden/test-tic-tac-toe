import './Game.css';
import {useState} from 'react';
import Board from '../board/Board';
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


const Game = () => {

  const [history, setHistory] = useState([{squares: Array(9).fill(null)}])
  const [xIsNext, setXNext] = useState(true);
  const current = history[history.length - 1];

  const handleClick = (i) => {
    const current = history[history.length - 1];
      const squaresCopy = current.squares.slice();
      if (calculateWinner(squaresCopy) || squaresCopy[i]) {
          return;
      }
      squaresCopy[i] = getXorO();

      setHistory(history.concat([{ squares: squaresCopy}]));
      setXNext(!xIsNext);

      console.log(`onClick cell number : ${i} value : ${squaresCopy[i]} `);
  }

  function getXorO() {
    return xIsNext ? 'X' : 'O';
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} handleClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <Status winner={calculateWinner(current.squares)} player={getXorO()} />
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
