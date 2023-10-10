import logo from "./logo.svg";
import "./Style.scss";

import { mountains } from "./mountainsList";
import { Mountains } from "./mountains";
import { TicTacToeApp } from "./TicTacToe";

export const App = () => {
  return (
    <div className="App">
      <Mountains mountains={mountains} />
      <br />
      <TicTacToeApp />
    </div>
  );
};
