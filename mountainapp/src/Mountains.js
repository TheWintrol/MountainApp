import "./Mountains.scss";

import * as React from "react";

import { Link } from "react-router-dom";

import { MountainInfo } from "./mountainInfo";

export const Mountains = ({ mountains }) => {
  const mountainNodes = mountains.map((mountain, mountainIdx) => (
    <MountainInfo
      key={mountainIdx}
      name={mountain.name}
      image={mountain.image}
    />
  ));
  return <div className="mountains">{mountainNodes}</div>;
};
