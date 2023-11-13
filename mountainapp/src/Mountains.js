// Mountains.js
import "./Mountains.scss";
import { Search } from "./Search";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MountainInfo } from "./mountainInfo";
import { Pagination } from "./Pagination";

export const Mountains = ({ mountains }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };

  const filteredMountains = mountains.filter((mountain) =>
    mountain.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderMountainNodes = () => {
    console.log("currentPage:", currentPage);
    console.log("itemsPerPage:", itemsPerPage);
    console.log("filteredMountains length:", filteredMountains.length);

    if (currentPage === 0) {
      return filteredMountains.map((mountain, mountainIdx) => (
        <Link key={mountainIdx} to={`/mountains/${mountain.slug}`}>
          <MountainInfo
            key={mountainIdx}
            name={mountain.name}
            image={mountain.image}
          />
        </Link>
      ));
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMountains = filteredMountains.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    return currentMountains.map((mountain, mountainIdx) => (
      <Link key={mountainIdx} to={`/mountains/${mountain.slug}`}>
        <MountainInfo
          key={mountainIdx}
          name={mountain.name}
          image={mountain.image}
        />
      </Link>
    ));
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mountains-container">
      <div className="search-container">
        <Search value={searchTerm} onChange={handleSearchChange} />
      </div>
      <div className="mountains">{renderMountainNodes()}</div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredMountains.length}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
