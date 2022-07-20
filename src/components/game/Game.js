import './Game.css';
import {useState, useContext} from 'react';
import Board from '../board/Board';
import Status from '../status/Status';
import History from '../history/History';
import {StateContext} from '../../contexts/state-context/StateContext';

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

  const {xIsNext, setXNext, stepNumber, setStepNumber} = useContext(StateContext);
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}])
  const current = history[stepNumber];

  const handleClick = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const current = historyCopy[historyCopy.length - 1];
    const squaresCopy = current.squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
        return;
    }
    squaresCopy[i] = getXorO();

    setStepNumber(historyCopy.length);
    setHistory(historyCopy.concat([{ squares: squaresCopy}]));
    setXNext(!xIsNext);

    console.log(`onClick cell number : ${i} value : ${squaresCopy[i]} `);
  }

  function getXorO() {
    return xIsNext ? 'X' : 'O';
  }

  return (
    <div className="game" role='game'>
      <div className="game-board">
        <Board squares={current.squares} handleClick={(i) => handleClick(i)} />
      </div>
      <section className="game-info">
        <Status winner={calculateWinner(current.squares)} player={getXorO()} />
        <History history={history}/>
      </section>
    </div>
  );
}

export default Game;
