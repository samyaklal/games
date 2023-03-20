import React, { useState } from "react";
import ReactDOM from "react-dom";

import Hangman from "hangman/Hangman";
import TicTacToe from "ticTacToe/TicTacToe";

import "./index.scss";

const App = () => {
  const [game, setGame] = useState("");

  let content;

  switch (game) {
    case "hangman":
      content = <Hangman />;
      break;

    case "tic tac toe":
      content = <TicTacToe />;
      break;

    default:
      content = <p className="select-game-label">Select Game</p>;
  }

  return (
    <>
      <h1>Games</h1>
      <nav>
        <button className="tab" onClick={() => setGame("hangman")}>Hangman</button>
        <button className="tab" onClick={() => setGame("tic tac toe")}>Tic Tac Toe</button>
      </nav>
      {content}
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
