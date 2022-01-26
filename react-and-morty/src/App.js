import React, { useState, useEffect } from "react";
import { useCharacters, useLocations } from "./api/useData";
import { useFetch } from "./api/useFetch";
import logo from "./images/Rick_and_Morty_Logo_and_Image.png";
import "./App.css";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import ButtonList from "./components/Button";

function App() {
  /*   const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1); */

  const [character, setCharacter] = useState(false);
  const [location, setLocation] = useState(false);

  const showChar = () => {
    setCharacter(true);
    setLocation(false);
  };

  const showLoc = () => {
    setLocation(true);
    setCharacter(false);
  };

  const charText = "Characters";
  const locText = "Location";

  return (
    <div className="App">
      <header>
        <img src={logo} />
      </header>
      <div className="container">
        <div className="buttons">
          {/* <button onClick={showChar}>Characters</button>
          <button onClick={showLoc}>Locations</button> */}
          <ButtonList charText={charText} locText={locText} showChar={showChar} showLoc={showLoc} />
          {/* <Button text="Locations" /> */}
          {/* //itt lesz egy button komponensünk még */}
        </div>
        {!character && !location ? (
          <div>
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
    </div >
  );
}

export default App;
