//@flow
import './Square.css';
import * as React from 'react';

type Props = {
  value: string,
  onClickCell: () => void;
}

const Square = ({value, onClickCell} : Props) : React.Node => {

  return (
    <button className="square" onClick={onClickCell}>
      {value}
    </button>
  );
}

export default Square;
