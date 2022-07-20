import {render, screen} from '@testing-library/react';
import Board from './Board';

test('render Board', () => {
  const handleClick = () => {}
  const squares = Array(9).fill(null);
  render(<Board squares={squares} handleClick={(i) => handleClick(i)} />)
  const board = screen.getByRole('board');
  expect(board).toBeInTheDocument();
});

test('Board has 9 cells (3 x 3)', () => {
  const handleClick = () => {}
  const squares = Array(9).fill(null);
  render(<Board squares={squares} handleClick={(i) => handleClick(i)} />)
  const board = screen.getAllByRole('button');
  expect(board.length).toBe(9);
});
