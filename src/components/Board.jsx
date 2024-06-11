import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

//   Winner function created here
  const calculateWinner = (squares) =>{
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
  }
  //Call the calculate winner function   
  const winner = calculateWinner(squares);

  // Status showing code 
  let status;
  if(winner){
    status = `Winner: ${winner}`
  } else{
    status = "Next Player" + (xIsNext ? "X": "O");
  }

//   Click handler function created here
   const handleClick = (i) => {
    if (squares[i]) {
      return;
    } else {
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  };

  
  return (
    <>
    <div>
        <h1>Winner: {status}</h1>
    </div>
      <div className="grid grid-cols-3">
        <div>
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
          ></Square>
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
          ></Square>
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
          ></Square>
        </div>
        <div>
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
          ></Square>
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
          ></Square>
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
          ></Square>
        </div>
        <div>
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
          ></Square>
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
          ></Square>
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
          ></Square>
        </div>
      </div>
    </>
  );
};

export default Board;
