import React, { useState } from "react";

const Character = (props) => {
  const [isShown, setIsShown] = useState(false);

  const showCharacterDetails = () => {
    setIsShown((isShown) => !isShown);
  };
  // bug (??) egyszerre tobb kartyat is meg lehet nyitni egymas tetejere
  return (
    <div className={isShown ? "detailedCards" : "miniCards"} onClick={showCharacterDetails}>
      <div className={isShown ? "portalCards" : ""}>
        <div className="charName">
          <p>{props.name}</p>
        </div>
        <div className="charPicture">
          <img className="img" src={props.image} alt="" />
        </div>
        <div className="charSpecies">
          <p>{props.species}</p>
        </div>
        {isShown && (
          <div>
            <p>Status: {props.status}</p>
          </div>
        )}
        {isShown && (
          <div>
            <p>Gender: {props.gender}</p>
          </div>
        )}
        {isShown && (
          <div>
            <p>Location: {props.location}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Character;
