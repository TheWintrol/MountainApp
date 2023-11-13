import React from "react";
import "./Search.scss";

export const Search = ({ value, onChange }) => {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search mountains"
      value={value}
      onChange={onChange}
    />
  );
};
