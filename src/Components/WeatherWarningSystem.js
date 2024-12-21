import React from "react";
import "./Styles/WeatherWarningSystem.css";

/* All weather warnings are based off Met Eireanns weather warning system. For more 
information on how these warnings work, please visit https://www.met.ie/weather-warnings */

/* Our main function which will hold and render our weather warnings, if any.
Please note, that this is just a test warning system and should not be taken seriously.
I was planning to implement this into my application properly by using the weather data provided by
OpenMeteo, but due to time constraints it is only hard coded system. Please feel free to mess around with it and see
how it works*/
function WeatherWarningSystem() {
  return (
    <>
      <WindWeatherWarning />
      <RainWarning />
    </>
  );
}

/* Displays current wind weather warning if any. CSS will change the color of the container, based on the severity of the warning */

function WindWeatherWarning(props) {
  //if you want to test this for yourself you can use this variable and modify it accordingly
  const sampleWindSpeed = 0;
  const sampleWindGust = 0;
  if (sampleWindSpeed > 80 || sampleWindGust > 130) {
    return (
      <>
        <div className="red-weather-warning">
          <h3>
            Red Warning: A Red Warning has been issued for your area. Extreme
            Wind Speeds and/or Gusts. Do NOT travel and Protect Your Life.
            Follow all advice and instructions provided to you by the local
            authorities and government.
          </h3>
          <h3>
            Wind Speed: {sampleWindSpeed}km/h, Wind Gusts: {sampleWindGust}km/h
          </h3>
          <p>
            Please note: This warning system was made for academic purposes only
            and should not be taken seriously. For real warnings, please check{" "}
            <a href="https://www.met.ie/warnings-tomorrow.html">Met Eireann</a>{" "}
            for more information.
          </p>
        </div>
      </>
    );
  } else if (
    (sampleWindSpeed >= 65 && sampleWindSpeed <= 80) ||
    (sampleWindGust >= 110 && sampleWindGust <= 130)
  ) {
    return (
      <>
        <div class="container">
          <div className="orange-weather-warning">
            <h3>
              Orange Warning: An Orange Warning has been issued for your area.
              Very High Wind Speeds and/or Gusts. Do NOT travel in current
              conditions.
            </h3>
            <h3>
              Wind Speed: {sampleWindSpeed}km/h, Wind Gusts: {sampleWindGust}
              km/h
            </h3>
            <p>
              Please note: This warning system was made for academic purposes
              only and should not be taken seriously. For real warnings, please
              check
              <a href="https://www.met.ie/warnings-tomorrow.html">
                Met Eireann
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </>
    );
  } else if (
    (sampleWindSpeed >= 55 && sampleWindSpeed < 65) ||
    (sampleWindGust >= 90 && sampleWindGust < 110)
  ) {
    return (
      <>
        <div class="container">
          <div className="yellow-weather-warning">
            <h3>
              Yellow Warning: A Yellow Warning has been issued for your area.
              High Wind Speeds and/or Gusts. Stay safe if travelling.
            </h3>
            <h3>
              Wind Speed: {sampleWindSpeed}km/h, Wind Gusts: {sampleWindGust}
              km/h
            </h3>
            <p>
              Please note: This warning system was made for academic purposes
              only and should not be taken seriously. For real warnings, please
              check{" "}
              <a href="https://www.met.ie/warnings-tomorrow.html">
                Met Eireann
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </>
    );
  }
}

/*Displays a warning for rain if any */
function RainWarning() {
  const sampleRain = 0;
  const hours = 0;

  if (
    (sampleRain >= 80 && hours <= 24) ||
    (sampleRain >= 60 && hours <= 12) ||
    (sampleRain >= 50 && hours <= 6)
  ) {
    return (
      <div className="red-weather-warning">
        <h3>
          Red Warning: A Red Warning has been issued for your area. Extreme
          Rainfall and Flooding. Do NOT travel and Protect Your Life. Follow all
          advice and instructions provided to you by the local authorities and
          government.
        </h3>
        <h3>Precipitation: {sampleRain}mm</h3>
        <p>
          Please note: This warning system was made for academic purposes only
          and should not be taken seriously. For real warnings, please check{" "}
          <a href="https://www.met.ie/warnings-tomorrow.html">Met Eireann</a>{" "}
          for more information.
        </p>
      </div>
    );
  }
}

export default WeatherWarningSystem;
