import react from "react";
import Square from "./Square";

const Board = () => {
  return (
    <main>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </main>
  );
};
export default Board;
