import { gameContext } from "../GameContext/gameContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
const Board = () => {
  const { turn, setTurn } = useContext(gameContext);
  const [pos, setPos] = useState<number[]>([]);
  const [xPos, setXPos] = useState<number[]>([]);
  const [oPos, setOPos] = useState<number[]>([]);
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    checkDraw();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn, pos, xPos, oPos]);

  const WinPositionsObj: { [key: number]: number[][] } = {
    1: [
      [5, 9],
      [4, 7],
      [2, 3],
    ],
    2: [
      [1, 3],
      [5, 8],
    ],
    3: [
      [1, 2],
      [5, 7],
      [6, 9],
    ],
    4: [
      [5, 6],
      [1, 7],
    ],
    5: [
      [1, 9],
      [3, 7],
      [4, 6],
      [2, 8],
    ],
    6: [
      [4, 5],
      [3, 9],
    ],
    7: [
      [1, 4],
      [3, 5],
      [8, 9],
    ],
    8: [
      [2, 5],
      [7, 9],
    ],
    9: [
      [1, 5],
      [3, 6],
      [7, 8],
    ],
  };

  const reset = () => {
    window.location.reload();
  };

  const checkWin = (id: number) => {
    if (turn % 2 === 0) {
      WinPositionsObj[id].forEach((item) => {
        if (xPos.includes(item[0]) && xPos.includes(item[1])) {
          setWin(true);
          toast.success("X Wins the game !!!");
        }
      });
    } else if (turn % 2 != 0) {
      WinPositionsObj[id].forEach((item) => {
        if (oPos.includes(item[0]) && oPos.includes(item[1])) {
          setWin(true);
          toast.success("O Wins the game !!!");
        }
      });
    }
  };

  const checkDraw = () => {
    if (pos.length === 9 && !win) {
      setDraw(true);
      toast.info("It's a draw!");
    }
  };
  const addSymbol = (id: string) => {
    // checkDraw();

    if (turn % 2 === 0 && !draw && !win) {
      const element = document.getElementById(id);

      if (element && !pos.includes(Number(id))) {
        element.innerHTML = `
        <div class="imgHolder" style="width:5vmin;height:5vmin;">
        <img src='cross.png' style="max-width:100%; max-height:100%; object-fit:contain"></img>
        </div>`;

        setTurn(turn + 1);
        setPos([...pos, Number(id)]); // To make that a single choice can be made for a specific input box;

        // console.log(pos);
        setXPos([...xPos, Number(id)]); // To maintain X Position

        checkWin(Number(id));
      }
    } else if (turn % 2 != 0 && !draw && !win) {
      const element = document.getElementById(id);

      if (element && !pos.includes(Number(id))) {
        element.innerHTML = `
          <div class="imgHolder" style="width:5vmin;height:5vmin;">
          <img src='OIcon.png' style="max-width:100%; max-height:100%; object-fit:contain"></img>
          </div>`;

        setTurn(turn + 1);
        setPos([...pos, Number(id)]); // To make that a single choice can be made for a specific input box;

        // console.log(pos);
        setOPos([...oPos, Number(id)]); //To Maintain Y-Position

        console.log(oPos);

        checkWin(Number(id));
      }
    }
  };
  return (
    <>
      <div className="Boardbody w-[100vw] h-[100vh] flex flex-col justify-center items-center ">
        <p className="font-bold text-[8vmin] " style={{ marginTop: "2.5vmin" }}>
          Tic-Tac-Toe
        </p>
        <div
          style={{ marginTop: "2.45vmin", paddingBottom: "1.45vmin" }}
          className="holder w-[92vw] lg:w-[75%]  flex flex-col justify-center items-center border-[#8B8000] rounded-[2vmin] bg-[#FDDA0D] border-[1px] "
        >
          <div
            className="Board w-[80%] lg:w-[40%]"
            style={{ marginTop: "6vmin" }}
          >
            <div className="row1 w-[100%] h-[20vmin] flex">
              <div
                className="col1 w-[33.33%] h-[100%] border-r-[3px] border-b-[3px] lg:border-r-[8px]  lg:border-b-[8px]  flex justify-center items-center"
                id="1"
                onClick={() => {
                  addSymbol("1");
                }}
              ></div>
              <div
                className="col2 w-[33.33%] h-[100%]  border-r-[3px] border-b-[3px] lg:border-r-[8px]  lg:border-b-[8px]  flex justify-center items-center"
                id="2"
                onClick={() => {
                  addSymbol("2");
                }}
              ></div>
              <div
                className="col3 w-[33.34%] h-[100%]  border-b-[3px]  lg:border-b-[8px] flex justify-center items-center"
                id="3"
                onClick={() => {
                  addSymbol("3");
                }}
              ></div>
            </div>
            <div className="row2 w-[100%] h-[20vmin] flex">
              <div
                className="col4 w-[33.33%] h-[100%]  border-b-[3px]  border-r-[3px] lg:border-r-[8px] lg:border-b-[8px] flex justify-center items-center"
                id="4"
                onClick={() => {
                  addSymbol("4");
                }}
              ></div>
              <div
                className="col5 w-[33.33%] h-[100%] border-b-[3px]  border-r-[3px] lg:border-r-[8px] lg:border-b-[8px] flex justify-center items-center"
                id="5"
                onClick={() => {
                  addSymbol("5");
                }}
              ></div>
              <div
                className="col6 w-[33.34%] h-[100%] border-b-[3px]  lg:border-b-[8px]  flex justify-center items-center"
                id="6"
                onClick={() => {
                  addSymbol("6");
                }}
              ></div>
            </div>
            <div className="row3 w-[100%] h-[20vmin] flex">
              <div
                className="col7 w-[33.33%] h-[100%] border-r-[3px] lg:border-r-[8px]  flex justify-center items-center"
                id="7"
                onClick={() => {
                  addSymbol("7");
                }}
              ></div>
              <div
                className="col8 w-[33.33%] h-[100%] border-r-[3px] lg:border-r-[8px]   flex justify-center items-center"
                id="8"
                onClick={() => {
                  addSymbol("8");
                }}
              ></div>
              <div
                className="col9 w-[33.34%] h-[100%] flex justify-center items-center"
                id="9"
                onClick={() => {
                  addSymbol("9");
                }}
              ></div>
            </div>
          </div>

          <div className="TextContainer mt-20">
            <p>
              {win ? (
                <>
                  <div
                    className="ml-[-5vmin] lg:ml-[-2vmin]"
                    style={{
                      marginTop: "8vmin",

                      fontSize: "4.75vmin",
                    }}
                  >
                    Game Over
                  </div>
                  <button
                    className="mt-6 bg-[#000000] text-[#fff] p-3 ml-[-2px]"
                    style={{ padding: "1.15vmin", marginTop: "1.35vmin" }}
                    onClick={reset}
                  >
                    Reset Game
                  </button>
                </>
              ) : draw ? (
                <>
                  <div
                    className="ml-[-5vmin] lg:ml-[-2vmin]"
                    style={{
                      marginTop: "8vmin",

                      fontSize: "4.75vmin",
                    }}
                  >
                    Game Over
                  </div>
                  <button
                    className="bg-[#000000] text-[#fff] ml-[-2px]"
                    style={{
                      padding: "1.15vmin",
                      marginLeft: "-2vmin",
                      marginTop: "1.35vmin",
                    }}
                    onClick={reset}
                  >
                    Reset Game
                  </button>
                </>
              ) : turn % 2 === 0 ? (
                <div
                  className=""
                  style={{
                    marginTop: "7vmin",
                    fontWeight: "medium",
                    fontSize: "3vmin",
                  }}
                >
                  X's Turn
                </div>
              ) : (
                <div
                  className=""
                  style={{
                    marginTop: "7vmin",
                    fontWeight: "medium",
                    fontSize: "3vmin",
                  }}
                >
                  O's Turn
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
