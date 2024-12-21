import React from "react";
import ClipLoader from "react-spinners/BeatLoader";

/*Displays a loading animation when our data is loading
/*Code used from: https://www.davidhu.io/react-spinners/
Reference: https://www.npmjs.com/package/react-spinners */
function Loading() {
  return (
    <>
      <ClipLoader
        className="loading"
        color="aqua"
        size={50}
        aria-label="Loading Spinner"
      />
      <h3>Loading... Please Wait!</h3>
    </>
  );
}

export default Loading;
