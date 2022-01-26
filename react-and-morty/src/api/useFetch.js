import React, { useState, useEffect } from "react";

/**
     Fetch data from the given url. If it can't get any data from the url, than it writes a message into the console.
     *
     * @param initUrl string that gives the route that the function fetch data from.
     */
export const useFetch = (initUrl) => {
  const [url, setUrl] = useState(initUrl);
  const [data, setData] = useState(undefined);
  /* setTimeout(() => { let { info, result } = data }, 5000); */
  let timeoutID;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) return "There must be a problem";
        return response.json();
      })
      .then((json) => setData(json));

    //   clearTimeout(timeoutID);

    //   timeoutID = setTimeout(() => {
    //     let { info, results } = data;
    //     return results;
    //   }, 5000);
  }, [url]);

  return [data, setUrl];
}
