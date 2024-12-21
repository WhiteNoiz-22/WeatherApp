import React from "react";
import "./Styles/Radars.css";

/*Displays a radar of Ireland using an iframe.
Radar information and iframe code provided by: https://www.rainviewer.com/ */
function Radars() {
  return (
    <>
      <div class="container-sm">
        <h3>Rainfall Radar</h3>
        <p>Updates Every 10 minutes</p>
        <iframe
          src="https://www.rainviewer.com/map.html?loc=53.0614,-7.5822,5&oC=true&oCS=1&oAP=3&c=3&o=83&lm=1&layer=radar&sm=1&sn=1"
          width="80%"
          className="Radar"
        ></iframe>
      </div>
    </>
  );
}

export default Radars;
