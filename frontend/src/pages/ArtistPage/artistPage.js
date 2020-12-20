import React from "react";
import SearchBar from "../../components/SearchBar/searchBar";
import "./artistPage.scss";

const ArtistPage = props => {
  return (
    <div>
      <section className="artist-page">
        <SearchBar />
      </section>
    </div>
  );
};

export default ArtistPage;
