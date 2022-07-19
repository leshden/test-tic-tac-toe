import Square from './Square';
import {render, screen} from '@testing-library/react';

test('render Square', ()=> {

  const onClickBtn = () => {}
  const value = 'X';

  render(<Square value={value} onClick={onClickBtn} />)

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent(value)

});
