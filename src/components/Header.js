import React from "react";
import Search from "./Search";
import NewListing from "./NewListing"
import Dropdown from "./Dropdown"

function Header({ setSearch, handleAddedItem, setSorting }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <span style={{ paddingLeft: "20px" }}><Dropdown setSorting={setSorting} /></span>
      <Search setSearch={setSearch} />
      <span style={{ paddingRight: "10px" }}>Add New Item: </span>
      <NewListing handleAddedItem={handleAddedItem} />
    </header>
  );
}

export default Header;
