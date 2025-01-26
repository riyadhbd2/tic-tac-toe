import { useState } from "react";
import Square from "./Square";



const Board = () => {

  const [value, setValue] = useState(null);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <Square value="1"></Square>
        <Square value="2"></Square>
        <Square value="3"></Square>
      </div>
      <div className="flex">
        <Square value="4"></Square>
        <Square value="5"></Square>
        <Square value="6"></Square>
      </div>
      <div className="flex">
        <Square value="7"></Square>
        <Square value="8"></Square>
        <Square value="9"></Square>
      </div>
    </div>
  );
};

export default Board;
