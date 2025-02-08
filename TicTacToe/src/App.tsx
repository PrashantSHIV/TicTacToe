import Board from "./Components/Board";
import { gameContext } from "./GameContext/gameContext";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [turn, setTurn] = useState(0);
  return (
    <>
      <gameContext.Provider value={{ turn: turn, setTurn }}>
        <Board />
        <ToastContainer />
      </gameContext.Provider>
    </>
  );
}

export default App;
