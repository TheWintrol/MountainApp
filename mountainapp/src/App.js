import "./TicTacToe/style.scss";

import { Mountains } from "./Mountains";
import { mountains } from "./mountainsList";

export const App = () => {
  return (
    <div className="App">
      <Mountains mountains={mountains} />
    </div>
  );
};
