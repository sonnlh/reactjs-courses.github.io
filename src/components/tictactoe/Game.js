import React, { useState } from "react";
import { useReducer } from "react";
import { howToWin } from "../../helpers";
import Board from "./Board";
import "./GameStyle.css";

const initualState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK":
      const { board, xIsNext } = state;
      const nextState = JSON.parse(JSON.stringify(state));
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      return nextState;
    }
    default:
      console.log("Error");
      break;
  }
  return state;
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initualState);
  const winner = howToWin(state.board);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };
  const handleResetGame = () => {
   dispatch({
     type: "RESET"
   })
  };

  return (
    <div className="game">
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner ? (
        <div className="game-winner">
          {" "}
          {winner ? `Winner is ${winner} ` : null}
        </div>
      ) : null}
      <button className="btn-game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
