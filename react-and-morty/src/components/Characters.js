import React, { useState } from "react";
import { useCharacters } from "../api/useData";
import Character from "./Character";

const Characters = (props) => {
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

    return (
        <div className="character-list">
            {characterList};
            {/* //plusz itt neki volt pagination is */}
        </div>
    )
}

export default Characters;