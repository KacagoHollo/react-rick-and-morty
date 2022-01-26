import React, { useState } from "react";
import Location from "./Location";
import { useLocations } from "../api/useData";

const Locations = (props) => {
    const [page, setPage] = useState(1);
    const location = useLocations(page);

    let locationList = [];

    if (location !== "Loading..." && location !== undefined) {
        locationList = location.results.map((item) => (
            <Location
                key={item.id}
                name={item.name}
                type={item.type}
                dimension={item.dimension}
                created={item.created}
            />
        ));
    }

    return (
        <div>
            <div className="location-list">
                {locationList}
            </div>;
        </div>
    );
}

export default Locations;