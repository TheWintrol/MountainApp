// Mountains.js
import "./Mountains.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MountainInfo } from "./mountainInfo";

export const Mountains = ({ mountains }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMountains = mountains.filter((mountain) =>
    mountain.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mountainNodes = filteredMountains.map((mountain, mountainIdx) => (
    <Link key={mountainIdx} to={`/mountains/${mountain.slug}`}>
      <MountainInfo
        key={mountainIdx}
        name={mountain.name}
        image={mountain.image}
      />
    </Link>
  ));

  return (
    <div className="mountains-container">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search mountains"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="mountains">{mountainNodes}</div>
    </div>
  );
};
