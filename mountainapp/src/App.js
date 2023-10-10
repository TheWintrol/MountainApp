import logo from "./logo.svg";
import "./Style.scss";
import * as MountainInfo from "./MountainInfo";
export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="mountains">
          <div className="mountains-info">
            <div className="column">
              <MountainInfo.Everest />
              <MountainInfo.K2 />
              <MountainInfo.Kangchenjunga />
              <MountainInfo.Lhotse />
            </div>
            <div className="column">
              <MountainInfo.Makalu />
              <MountainInfo.Fuji />
              <MountainInfo.Kita />
              <MountainInfo.Matterhorn />
            </div>
            <div className="column">
              <MountainInfo.Vinicunca />
              <MountainInfo.Kilimanjaro />
              <MountainInfo.Craddle />
              <MountainInfo.Castle />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
