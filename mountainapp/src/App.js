import { Mountains } from "./mountains";
import { mountains } from "./mountainsList";

const App = () => {
  return (
    <div className="App">
      <Mountains mountains={mountains} />
    </div>
  );
};

export { App };
