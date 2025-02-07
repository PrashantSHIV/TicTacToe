import { createContext } from "react";

export const gameContext = createContext({
  turn: 0,
  setTurn: (turn: number) => {
    console.log(turn);
  },
});
