import {useSateContext} from '../../contexts/state-context/StateContext';

const History = ({history}) => {

  const {setStepNumber, setXNext} = useSateContext();

  const jumpTo = (step) => {
    setStepNumber(step);
    setXNext((step % 2) === 0);
    console.log(`jumpToStep: ${step}`);
  }

  const moves = history.map((step, move) => {
   const desc = move ?
     'Go to move #' + move :
     'Go to game start';
   return (
     <li key={move}>
       <button onClick={()=>{jumpTo(move)}}>{desc}</button>
     </li>
   );
  });

  return (
    <ol>
      {moves}
    </ol>
  );
}

export default History;
