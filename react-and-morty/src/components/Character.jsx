import React, { useState } from "react";

const Character = (props) => {
  const [isShown, setIsShown] = useState(false);

  const showCharacterDetails = () => {
    setIsShown((isShown) => !isShown);
  };
  // bug (??) egyszerre tobb kartyat is meg lehet nyitni egymas tetejere
  return (
    <div className={isShown ? "detailedCards" : "miniCards"} onMouseEnter={showCharacterDetails} onClick={showCharacterDetails}>
      <div className={isShown ? "portalCards" : ""}>
        <div className="charName">
          <p className="charac">{props.name}</p>
        </div>
        <div className="charPicture">
          <img className="img" src={props.image} alt="" />
        </div>
        <div className="charSpecies">
          <p className="characSpec">{props.species}</p>
        </div>
        {isShown && (
          <div>
            <p className="low"><small>Status:</small> {props.status}</p>
            <p className="low"><small>Gender:</small> {props.gender}</p>
            <p className="low"><small>Location:</small> {props.location}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Character;
