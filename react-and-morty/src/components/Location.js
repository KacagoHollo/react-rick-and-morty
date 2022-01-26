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
            <div className="locName">
                <p>{props.name}</p>
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
    );
};
export default Location;