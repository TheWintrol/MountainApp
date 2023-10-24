import "./Mountains.scss";
import { MountainInfo } from "./MountainInfo";

export const Mountains = ({ mountains }) => {
  const mountainNodes = mountains.map((mountain, mountainIdx) => (
    <MountainInfo
      key={mountainIdx}
      name={mountain.name}
      description={mountain.description}
      image={mountain.image}
    />
  ));
  return <div className="mountains">{mountainNodes}</div>;
};
