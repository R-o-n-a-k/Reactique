import React from "react";
import "./TicTacToe.css";
import BackToHome from "../../components/BackToHome/BackToHome";
import useTicTacToe from "./TicTacToe-Hooks/useTicTacToe";

const TicTacToe = () => {
  const {
    square,
    handlesquareClick,
    handleRestartGame,
    turn,
    getStatusMessage,
    winner,
  } = useTicTacToe();

  return (
    <div className="ticTacToe-container">
      <div className="ticTacToe-game">
        <h3>Tic Tac Toe</h3>
        <div className="ticTacToe">
          <div className="board">
            {square.map((value, index) => (
              <button
                className={`square ${value === "X" ? "x-color" : "o-color"} `}
                key={index}
                onClick={() => handlesquareClick(index)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="ticTacToe-status">{getStatusMessage()}</div>
        <button className="restart-game-btn" onClick={handleRestartGame}>
          Restart
        </button>
      </div>
      <BackToHome bgColor="cornflowerblue" bottom="5%" />
    </div>
  );
};

export default TicTacToe;
