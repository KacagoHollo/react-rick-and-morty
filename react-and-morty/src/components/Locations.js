import React, { useState } from "react";
import Location from "./Location";
import { useLocations } from "../api/useData";
import Pagination from "@material-ui/lab/Pagination";

const Locations = (props) => {
  const [page, setPage] = useState(1);
  const location = useLocations(page);

  let locationList = [];

  if (location !== "Loading..." && location !== undefined) {
    locationList = location.results.map((item) => (
      <Location key={item.id} name={item.name} type={item.type} dimension={item.dimension} created={item.created} />
    ));
  }

  const paginationEvent = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className="location-list">{locationList}</div>;
      <div className="pagination">
        <Pagination
          count="7"
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

export default Locations;
