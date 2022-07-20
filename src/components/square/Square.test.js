import Square from './Square';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

test('render Square', ()=> {

  const onClickBtn = () => {}
  const value = '';

  render(<Square value={value} onClick={onClickBtn} />)

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();

});

test('square has X text', () => {
  const onClickBtn = jest.fn();
  const value = 'X';

  render(<Square value={value} onClick={onClickBtn} />)

  const button = screen.getByRole('button');

  expect(button).toHaveTextContent(value);
});

test('click on square', () => {
  const value = '';
  const onClickBtn = jest.fn();

  render(<Square value={value} onClickCell={onClickBtn} />)

  const button = screen.getByRole('button');

  userEvent.click(button);
  expect(onClickBtn).toHaveBeenCalledTimes(1);
});
