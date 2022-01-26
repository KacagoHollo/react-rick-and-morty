import React, { useState } from 'react';

const Location = (props) => {
    const [isShown, setIsShown] = useState(false);

    const showLocationDetails = () => {
        setIsShown((isShown) => !isShown);
    };

    return (
        <div
            className={isShown ? "locVisible" : "locCard"}
            onClick={showLocationDetails}
        >
            <div className={isShown ? "portalCardsLoc" : ""}>
                <div className="locName">
                    <h2>{props.name}</h2>
                </div>
                <div className="locType">
                    <p>{props.type}</p>
                </div>
                {isShown && (
                    <div>
                        <p>Dimension: {props.dimension}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Location;