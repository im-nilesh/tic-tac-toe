export default function Log({ turns }) {
  return (
    <ol id="log">
      {Array.isArray(turns) ? (
        turns.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row},{turn.square.col}
          </li>
        ))
      ) : (
        <li>No turns available</li>
      )}
    </ol>
  );
}
