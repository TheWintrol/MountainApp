import logo from "./logo.svg";
import "./TicTacToe/style.scss";

import { mountains } from "./mountainsList";
import { TicTacToeApp } from "./TicTacToe";

export const App = () => {
  return (
    <div className="App">
      <TicTacToeApp />
    </div>
  );
};
