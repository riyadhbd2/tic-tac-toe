import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
};

const Board = ({ xIsNext, squares, onPlay }) => {
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="mb-4 text-lg">{status}</div>
      <div className="flex">
        {squares.slice(0, 3).map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handleClick(index)}
          />
        ))}
      </div>
      <div className="flex">
        {squares.slice(3, 6).map((value, index) => (
          <Square
            key={index + 3}
            value={value}
            onSquareClick={() => handleClick(index + 3)}
          />
        ))}
      </div>
      <div className="flex">
        {squares.slice(6, 9).map((value, index) => (
          <Square
            key={index + 6}
            value={value}
            onSquareClick={() => handleClick(index + 6)}
          />
        ))}
      </div>
    </>
  );
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (move) => {
    setHistory(history.slice(0, move + 1));
    setXIsNext(move % 2 === 0);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol>
          {history.map((_, move) => (
            <li key={move}>
              <button
                onClick={() => jumpTo(move)}
                className="bg-blue-500 text-white px-2 py-1 rounded m-1"
              >
                {move === 0 ? "Go to game start" : `Go to move #${move}`}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Game;

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
