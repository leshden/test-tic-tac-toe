const Status = ({winner, player}) => {
  let status = winner ? 'Winner: ' + winner : 'Next player: ' + player;

  return (
    <div className="status">{status}</div>
  );
}

export default Status;
