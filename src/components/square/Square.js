import './Square.css';

const Square = ({value, onClickCell}) => {

  return (
    <button className="square" onClick={onClickCell}>
      {value}
    </button>
  );
}

export default Square;
