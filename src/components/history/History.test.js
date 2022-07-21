import {render, screen} from '@testing-library/react';
import History from './History';
import {StateContextProvider} from '../../contexts/state-context/StateContext';

test('render History', ()=>{
  const history = [0, 1, 2, 3] // 4 buttons or 4 <li>
  render(
    <StateContextProvider>
      <History history={history}/>
    </StateContextProvider>
  )
  const listItems = screen.getAllByRole('listitem');
  expect(listItems.length).toBe(4);
});

test('check text on buttons', ()=>{
  const history = [0, 1] // 2 buttons or 2 <li>
  render(
    <StateContextProvider>
      <History history={history}/>
    </StateContextProvider>
  )

  const buttonStart = screen.getByText(/game start/i);
  expect(buttonStart).toBeInTheDocument();

  const buttonMove = screen.getByText(/move/i);
  expect(buttonMove).toBeInTheDocument();
});
