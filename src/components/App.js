import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sorting, setSorting] = useState("unsorted")

  // Fetch data from api and set state 
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setListings(data))
  }, [])

  // Handle front-end deleted item
  function handleDeletedItem(item) {
    const updatedListings = listings.filter(listing => {
      return listing.id !== item.id
    })
    setListings(updatedListings)
  }

  // Handle search bar functionality 
  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  // Handle front-end new item 
  function handleAddedItem(addedItem) {
    setListings([...listings, addedItem])
  }

  // Handle sort by whatever's selected in the dropdown
  if (sorting === "location") {
    filteredListings.sort((a, b) => {
      {
        if (a.location < b.location) { return -1; }
        if (a.location > b.location) { return 1; }
        return 0;
      }
    })
  } else if (sorting === "description") {
    filteredListings.sort((a, b) => {
      {
        if (a.description < b.description) { return -1; }
        if (a.description > b.description) { return 1; }
        return 0;
      }
    })
  }

  return (
    <div className="app">
      <Header setSearch={setSearch} handleAddedItem={handleAddedItem} setSorting={setSorting} />
      <ListingsContainer listings={filteredListings} handleDeletedItem={handleDeletedItem} />
    </div>
  );
}

export default App;
