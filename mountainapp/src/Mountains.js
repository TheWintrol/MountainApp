import "./Mountains.scss";
import { MountainInfo } from "./MountainInfo";

export const Mountains = ({ mountains }) => {
  const mountainNodes = mountains.map((mountain, mountainIdx) => (
    <MountainInfo name={mountain.name} description={mountain.description} />
  ));
  return <div className="mountains">{mountainNodes}</div>;
};
