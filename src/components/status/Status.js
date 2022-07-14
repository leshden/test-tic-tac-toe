const Status = ({winner, player}) => {
  let status = winner ? 'Winner: ' + winner : 'Next player: ' + player;

  return (
    <h3 className="status">{status}</h3>
  );
}

export default Status;
