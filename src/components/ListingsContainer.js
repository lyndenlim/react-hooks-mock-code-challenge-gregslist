import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeletedItem }) {

  const listingElements = listings.map(listing => {
    return <ListingCard listing={listing} handleDeletedItem={handleDeletedItem} />
  })

  return (
    <main>
      <ul className="cards">
        {listingElements}
      </ul>
    </main>
  );
}

export default ListingsContainer;
