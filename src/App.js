import Game from './components/game/Game'
import {StateContextProvider} from './contexts/state-context/StateContext';

function App() {
  return (
    <StateContextProvider>
      <Game />
    </StateContextProvider>
  );
}

export default App;
