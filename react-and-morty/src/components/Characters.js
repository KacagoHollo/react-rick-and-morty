import React, { useState } from "react";
import { useCharacters } from "../api/useData";
import Character from "./Character";
import Pagination from "@material-ui/lab/Pagination";

const Characters = () => {
  const [page, setPage] = useState(1);
  const character = useCharacters(page);

  let characterList = [];

  if (character !== "Loading..." && character !== undefined) {
    characterList = character.results.map((item) => (
      <Character
        key={item.id}
        image={item.image}
        name={item.name}
        species={item.species}
        gender={item.gender}
        origin={item.origin.name}
        location={item.location.name}
      />
    ));
  }

  const paginationEvent = (event, value) => {
    setPage(value);
  };

  return (
    <div className="character-list">
      {characterList}
      <div className="pagination">
        <Pagination
          count="42"
          page={page}
          onChange={paginationEvent}
          defaultPage={1}
          boundaryCount={2}
          size="large"
          color="secondary"
        />
      </div>
    </div>
  );
};

export default Characters;
