//@flow
import * as React from 'react';

type Props = {
  winner: string;
  player: string;
}

const Status = ({winner, player}: Props) : React.Node => {
  let status = winner ? 'Winner: ' + winner : 'Next player: ' + player;

  return (
    <h3 className="status">{status}</h3>
  );
}

export default Status;
