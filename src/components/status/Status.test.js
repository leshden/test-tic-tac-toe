import {render, screen} from '@testing-library/react';
import Status from './Status';

test('render Status', ()=>{
  const winner = '';
  const player = 'X';

  render(<Status winner={winner} player={player} />);

  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});

test('winner X', ()=>{
  const winner = 'X';
  const player = 'X';

  render(<Status winner={winner} player={player} />);

  const heading = screen.getByText(/winner/i);
  expect(heading).toBeInTheDocument();
});
