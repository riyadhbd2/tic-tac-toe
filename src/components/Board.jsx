import { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    console.log(squares);
    const handleClick = (i) =>{
        if(squares[i]){
            return;
        }
        else{
            const nextSquares = squares.slice();
            if(xIsNext){
                nextSquares[i] = "X";
            }
            else{
                nextSquares[i] ="O";
            }
            setSquares(nextSquares);
            setXIsNext(!xIsNext);
        }
    }
  return (
    <div className="grid grid-cols-3">
      <div>
        <Square value ={squares[0]} onSquareClick={()=>handleClick(0)}></Square>
        <Square value ={squares[1]} onSquareClick={()=>handleClick(1)}></Square>
        <Square value ={squares[2]} onSquareClick={()=>handleClick(2)}></Square>
      </div>
      <div>
        <Square value ={squares[3]} onSquareClick={()=>handleClick(3)}></Square>
        <Square value ={squares[4]} onSquareClick={()=>handleClick(4)}></Square>
        <Square value ={squares[5]} onSquareClick={()=>handleClick(5)}></Square>
      </div>
      <div>
        <Square value ={squares[6]} onSquareClick={()=>handleClick(6)}></Square>
        <Square value ={squares[7]} onSquareClick={()=>handleClick(7)}></Square>
        <Square value ={squares[8]} onSquareClick={()=>handleClick(8)}></Square>
      </div>
    </div>
  );
};

export default Board;
