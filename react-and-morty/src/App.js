import React, { useState, useEffect } from "react";
import { useCharacters, useLocations } from "./api/useData";
import { useFetch } from "./api/useFetch";
import logo from "./images/Rick_and_Morty_Logo_and_Image.png";
import "./App.css";
import Characters from "./components/Characters.jsx";
import Locations from "./components/Locations.jsx";
import ButtonList from "./components/Button.jsx";
import Description from "./components/Description.jsx";

function App() {
  /*   const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1); */

  const [character, setCharacter] = useState(false);
  const [location, setLocation] = useState(false);
  const [description, setDescription] = useState(true);

  const showChar = () => {
    setCharacter(true);
    setLocation(false);
    setDescription(false);
  };

  const showLoc = () => {
    setLocation(true);
    setCharacter(false);
    setDescription(false);
  };

  const showDesc = () => {
    setLocation(false);
    setCharacter(false);
    setDescription(true);
  };

  const charText = "Characters";
  const locText = "Locations";

  return (
    <div className="App">
      <header>
        <img src={logo} onClick={showDesc} />
      </header>
      <div className="content">
        <div className="buttons">
          {/* <button onClick={showChar}>Characters</button>
          <button onClick={showLoc}>Locations</button> */}
          <ButtonList charText={charText} locText={locText} showChar={showChar} showLoc={showLoc} />
          {/* <Button text="Locations" /> */}
          {/* //itt lesz egy button komponensünk még */}
        </div>
        {!character && !location ? (
          <div>
            <Description />
            {/* <Description /> */}
            {/* //itt lesz a bemutatkozó komponens */}
          </div>
        ) : (
          <div className="card">
            {character && <Characters />}
            {location && <Locations />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
