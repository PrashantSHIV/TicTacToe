import Board from "./Components/Board";
import { gameContext } from "./GameContext/gameContext";
import { useState } from "react";

function App() {
  const [turn, setTurn] = useState(0);
  return (
    <>
      <gameContext.Provider value={{ turn: turn, setTurn }}>
        <Board />
      </gameContext.Provider>
    </>
  );
}

export default App;
